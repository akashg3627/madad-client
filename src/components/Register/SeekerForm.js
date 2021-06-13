import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import citySuggestion from "../../resources/city";
// import facilitySuggestion from '../../resources/cusReq';

import { useDispatch } from "react-redux";
import { postSeeker } from "../../redux/ActionCreators";
// import AutoSuggest from '../AutoSuggest';
import { GrTwitter } from "react-icons/gr";
import { useHistory } from "react-router";
import services from "../../resources/seekService";
import Select from "react-select";

const SeekerForm = ({ toggleModal }) => {
	const dispatch = useDispatch();
	// const user = useSelector(state=> state.users.user);
	const history = useHistory();
	const [city, setCity] = useState("");

	const [twitter, setTwit] = useState(true);
	const [value1, setV1] = useState("");
	const [key1, setK1] = useState("");
	const [value2, setV2] = useState("");
	const [key2, setK2] = useState("");
	const [address, setAddress] = useState("");
	const [comment, setComment] = useState("");
	const [facility, setFacility] = useState("");
	const [tags, setTags] = useState("");
	const [isAlert, setIsAlert] = useState(0);
	const [alertMessage, setAlertMessage] = useState("");
	const [facLabel, setLabel] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		var extra = [];
		if (key1 !== null) {
			extra.push({ key: key1, value: value1 });
			if (key2 !== null) {
				extra.push({ key: key2, value: value2 });
			}
		}
		const seeker = {
			address: address,
			city: city,
			tags: tags,
			extra: extra.length > 0 ? extra : null,
			twitter: twitter,
			services: facility,
			comments: comment,
		};

		if (city !== "" && facility !== "") {
			dispatch(postSeeker(seeker));
			setComment("");
			setAlertMessage("Your request for " + facLabel + " has been registered successfully");
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
	const appendCity = (city) => {
		setCity(city);
	};
	const appendFacility = (e) => {
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
			<h5 className="text-center mt-3">Registration for Help Request</h5>
			<FormGroup>
				<Label for="address">Address</Label>
				<Input
					type="text"
					name="address"
					id="address"
					onChange={(e) => {
						setAddress(e.target.value);
					}}
					placeholder="Enter your Address"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="city">
					City<span style={{ color: "red" }}>*</span>
				</Label>
				<Select
					onChange={(e) => {
						appendCity(e.value);
					}}
					name="city"
					options={citySuggestion}
					placeholder="Select City..."
				/>
			</FormGroup>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="requirements">
						Requirements<span style={{ color: "red" }}>*</span>&nbsp;
					</Label>
					<small>(Please select one at a time.)</small>
					<Select
						value={facility.length > 0 ? { value: facility, label: facLabel } : null}
						onChange={(e) => {
							appendFacility(e);
						}}
						name="facility"
						options={services}
						placeholder="Select service needed..."
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
										<Label for="key2">{s.key2}*</Label>
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
						id="comments"
						onChange={(e) => {
							setComment(e.target.value);
						}}
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

				<ButtonGroup className="row d-block text-center">
					<Button className="col-9 col-md-4 mt-1" color="warning" type="submit">
						Add More Request
					</Button>
					<Button className="col-9 col-md-4 mt-1" type="submit" color="primary">
						Submit Request
					</Button>
					<Button className="col-9 col-md-4 mt-1" color="success" onClick={handleDone}>
						Close
					</Button>
				</ButtonGroup>
			</Form>
		</div>
	);
};

export default SeekerForm;
