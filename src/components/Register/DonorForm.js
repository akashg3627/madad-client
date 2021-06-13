import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Alert } from "reactstrap";
import citySuggestion from "../../resources/city";

import { useDispatch } from "react-redux";
import { postDonor } from "../../redux/ActionCreators";

import services from "../../resources/provideService";
import { useHistory } from "react-router";
import { GrTwitter } from "react-icons/gr";
import Select from "react-select";

const DonorForm = ({ toggleModal }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	// const user = useSelector(state=>state.users.user);
	const [city, setCity] = useState([]);
	const [name, setName] = useState("");
	const [twitter, setTwit] = useState(true);
	const [facility, setFacility] = useState("");
	const [comment, setComment] = useState("");
	const [value1, setV1] = useState("");
	const [key1, setK1] = useState(null);
	const [value2, setV2] = useState("");
	const [key2, setK2] = useState(null);
	const [uploadF, setUpload] = useState(false);
	const [donorAuth, setDAuth] = useState(false);
	const [tags, setTags] = useState("");
	const [isAlert, setIsAlert] = useState(0);
	const [alertMessage, setAlertMessage] = useState("");
	const [facLabel, setLabel] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const cityStr = city.join(" / ");
		var extra = [];
		if (key1 !== null) {
			extra.push({ key: key1, value: value1 });
			if (key2 !== null) {
				extra.push({ key: key2, value: value2 });
			}
		}

		var donorType;
		if (donorAuth) {
			donorType = "donorAuth";
			setUpload(true);
		} else {
			donorType = "donorNonAuth";
		}
		const donor = {
			organizationName: name,
			city: cityStr,
			services: facility,
			comments: comment,
			twitter: twitter,
			tags: tags,
			donorType: donorType,
			extra: extra.length > 0 ? extra : null,
		};
		// console.log(donor);

		if (cityStr !== "" && facility !== "") {
			dispatch(postDonor(donor));
			setComment("");
			setAlertMessage("Your service for " + facLabel + " has been registered successfully");
			setIsAlert(1);
			setFacility("");
		} else {
			setAlertMessage("Please Enter City Name(s) and Facility");
			setIsAlert(-1);
		}
		setTimeout(() => {
			setIsAlert(0);
		}, 6000);
	}
	const appendCity = (e) => {
		console.log(e);
		const cityArray = e.map((c) => {
			return c.value;
		});
		setCity(cityArray);
	};

	const appendFacility = (e) => {
		if (e.donorAUTH) {
			setDAuth(true);
		} else {
			setDAuth(false);
		}
		setFacility(e.value);
		setLabel(e.label);
	};

	const handleDone = () => {
		setTimeout(() => {
			history.push("/profile");
		}, 2000);
	};

	return (
		<div className="container">
			<h5 className="text-center mt-3">Registration for Providing Help</h5>
			<FormGroup>
				<Label for="name">Organization Name</Label>&nbsp;
				<small>(If any)</small>
				<Input
					type="text"
					name="name"
					id="name"
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter your Organization Name"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="city">
					Working Cities<span style={{ color: "red" }}>*</span>
				</Label>
				&nbsp;
				<small>(multiple selections allowed)</small>
				<Select
					isMulti
					onChange={(e) => appendCity(e)}
					name="city"
					options={citySuggestion}
					placeholder="Select your cities..."
				/>
			</FormGroup>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="service">
						Service/Resources you can Provide<span style={{ color: "red" }}>*</span>
					</Label>
					&nbsp;
					<small>(please select one service at a time)</small>
					<Select
						value={facility.length > 0 ? { value: facility, label: facLabel } : null}
						onChange={(e) => appendFacility(e)}
						name="service"
						options={services}
						placeholder="Select your service/resource..."
					/>
				</FormGroup>
				{services.map((s) => {
					if (s.value === facility) {
						return (
							<div>
								{s.key1 ? (
									<FormGroup>
										<Label for="key1">
											{s.key1}
											<span style={{ color: "red" }}>*</span>
										</Label>
										<Input
											type="text"
											required
											name="key1"
											id="key1"
											onChange={(e) => {
												setV1(e.target.value);
												setK1(s.key1);
											}}
											placeholder="Enter value"
										/>
									</FormGroup>
								) : null}
								{s.key2 ? (
									<FormGroup>
										<Label for="key2">{s.key2}</Label>
										<Input
											type="text"
											name="key2"
											id="key2"
											onChange={(e) => {
												setV2(e.target.value);
												setK2(s.key2);
											}}
											placeholder="Enter value"
										/>
									</FormGroup>
								) : null}
							</div>
						);
					} else return null;
				})}
				<FormGroup>
					<Label for="comments">Description</Label>
					<Input
						value={comment}
						type="textarea"
						name="comments"
						onChange={(e) => setComment(e.target.value)}
						id="comments"
					/>
				</FormGroup>
				{twitter ? (
					<FormGroup>
						<Label for="tags">Include Twitter Tags</Label>
						<Input
							type="text"
							name="tags"
							placeholder="#Emergency #Urgent #CovidHelp ...."
							onChange={(e) => setTags(e.target.value)}
							id="tags"
						/>
					</FormGroup>
				) : null}
				<FormGroup check className="mb-4 ml-3">
					<Label check>
						<Input checked={twitter} onChange={() => setTwit(!twitter)} type="checkbox" /> I allow posting
						my data to twitter <GrTwitter color="blue" />
					</Label>
				</FormGroup>

				{isAlert !== 0 && (
					<div
						class={"alert fade show alert-" + (isAlert === -1 ? "danger" : "success")}
						variant={isAlert === -1 ? "danger" : "success"}
						role="alert"
					>
						{alertMessage}
					</div>
				)}

				{uploadF ? (
					<Alert>
						Thank you for providing Authorized Services like OxygenCylinder, Injection. For providing this,
						please attach document.{" "}
						<Button
							onClick={() => {
								window.open("https://forms.gle/mmVuai6NHkuQP2m7A");
							}}
						>
							Upload Document
						</Button>
					</Alert>
				) : null}
				<ButtonGroup className="row d-block text-center">
					<Button className="col-9 col-md-4 mt-1" color="warning" type="submit">
						Add More Service
					</Button>
					<Button className="col-9 col-md-4 mt-1" type="submit" color="primary">
						Submit Details
					</Button>
					<Button className="col-9 col-md-4 mt-1" color="success" onClick={handleDone}>
						Close
					</Button>
				</ButtonGroup>
			</Form>
		</div>
	);
};

export default DonorForm;
