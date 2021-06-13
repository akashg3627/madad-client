import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Button } from "reactstrap";
import city from "../../resources/city";
import services from "../../resources/provideService";
import { useSelector, useDispatch } from "react-redux";
import DonorCard from "./DonorCard";
import Loading from "../Loading";
import Noresult from "../Noresult";
import { fetchDonor } from "../../redux/ActionCreators";
import { FaSearch } from "react-icons/fa";

function Provider({ serve }) {
	const donor = useSelector((state) => state.donorReducer.donors);
	const isLoading = useSelector((state) => state.donorReducer.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDonor());
	}, [dispatch]);

	const [searched, setSearch] = useState([]);
	const initFacility = serve ? serve.service : "";
	const [selectedFacility, setFacility] = useState(initFacility);
	const [selectedCity, setCity] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		function handleSearch() {
			// console.log(selectedFacility);
			// console.log(selectedCity);
			var temp = [];
			temp = donor.filter((v) => v.city.search(selectedCity) !== -1);
			var temp2 = [];
			temp2 = temp.filter((v) => v.services.search(selectedFacility) !== -1);
			setSearch(temp2);
		}
		handleSearch();
	}, [isLoading]);
	function handleSearch() {
		// console.log(selectedFacility);
		// console.log(selectedCity);
		var temp = [];
		temp = donor.filter((v) => v.city.search(selectedCity) !== -1);
		var temp2 = [];
		temp2 = temp.filter((v) => v.services.search(selectedFacility) !== -1);
		setSearch(temp2);
	}

	const item = searched
		.map((d) => {
			return (
				<div key={d._id} className="col-12 col-md-3 mt-1 mb-1">
					<DonorCard donor={d} />
				</div>
			);
		})
		.reverse();

	return (
		<div className="container-fluid container-70">
			<div className="row">
				<div className="col-12 col-sm-5 mt-1">
					<Select
						defaultValue={
							initFacility.length === 0
								? null
								: { value: initFacility, label: initFacility }
						}
						onChange={(e) => {
							if (e) {
								setFacility(e.value);
							} else {
								setFacility("");
							}
						}}
						name="selectedFacility"
						options={services}
						isClearable
						placeholder="Select service..."
					/>
				</div>
				<div className="col-12 col-sm-5 mt-1">
					<Select
						onChange={(e) => {
							if (e) {
								setCity(e.value);
							} else {
								setCity("");
							}
						}}
						name="selectedCity"
						options={city}
						isClearable
						placeholder="Select city..."
					/>
				</div>
				<div className="col-12 col-sm-2 mt-1">
					<Button color="primary" block onClick={handleSearch}>
						<FaSearch /> Search
					</Button>
				</div>
			</div>
			<div className="row mt-3 justify-content-center">
				{isLoading ? <Loading /> : searched.length > 0 ? item : <Noresult type="1" />}
			</div>
		</div>
	);
}

export default Provider;
