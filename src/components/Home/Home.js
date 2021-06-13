import React, { useEffect } from "react";

import { Button } from "reactstrap";

import { useHistory } from "react-router";

// import MyCarousel from "../MyCarousel";

import Example from "./Carousal";
import Services from "./Services";
import { map } from "../../Images";
import "./Home.css";

const Home = () => {
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleDonate = () => {
		history.push("/donate");
	};
	const handleReg = () => {
		history.push("/register");
	};
	return (
		<div className="container-fluid">
			<div className="HomeS1">
				<Example />
			</div>
			<div className="HomeBg">
				<div id="HomeS2">
					<div className="row paddingZero align-item-center">
						<h6 id="WAYLF" className="text-center">
							What are you looking for?
						</h6>
					</div>
					<Services />
				</div>
				<div id="HomeS3">
					<h6 className="regHead">Registration Process</h6>

					<div className="row align-item-center justify-content-center">
						<img src={map} className="regImg" alt="" />
					</div>
					<div className="row align-item-center justify-content-center">
						<div className="col-4 col-md-3 regCard">
							<h6 className="regCH">SignUp/SignIn</h6>
							Onboard on MADAD portal by Signing Up via your Mobile number.
						</div>
						<div className="col-4 col-md-3 mx-md-2 regCard">
							<h6 className="regCH">Choose your role</h6>
							Choose your role as Provider OR Help-Seeker
						</div>
						<div className="col-4 col-md-3 regCard">
							<h6 className="regCH">Fill the Details</h6>
							Fill the details of your resources/requests
						</div>
					</div>
					<div className="row align-item-center justify-content-center">
						<button onClick={handleReg} className="regBtn ">
							Register Now
						</button>
					</div>
				</div>
			</div>
			<div className="row justify-content-center  donateCard">
				<div className="m-auto">
					<Button onClick={handleDonate} color="warning" className="btn-donate">
						Want to Donate?
					</Button>
				</div>
			</div>
		</div>
	);
};
export default Home;
