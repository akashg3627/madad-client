import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import { pmCaresImage, cmCaresImage, soodFoundation, akshayPatra } from "../Images";

function Donate(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="container container-70">
			<div className="row d-block m-auto text-center">
				<h1 id="help" className=" mt-5">
					Help Them to Help You
				</h1>
				<br />
			</div>
			<div className="row justify-content-center">
				<div className=" col-12 col-md-3 my-2 ">
					<a
						href="https://www.pmcares.gov.in/en/web/contribution/donate_india"
						rel="noreferrer"
						target="_blank"
					>
						<Card className=" donationCard">
							<CardImg top width="100%" src={pmCaresImage} alt="Card image cap" />
						</Card>
					</a>
				</div>
				<div className="col-12 col-md-3 my-2">
					<Link to="/cmfund">
						<Card className=" donationCard">
							<CardImg top width="100%" src={cmCaresImage} alt="Card image cap" />
						</Card>
					</Link>
				</div>
				<div className=" col-12 col-md-3 my-2">
					<a
						href="https://www.instamojo.com/@soodcharityfoundation/lcbf43d4ae0824ea4a4118175cd8e9d28/"
						rel="noreferrer"
						target="_blank"
					>
						<Card className=" donationCard">
							<CardImg top width="100%" src={soodFoundation} alt="Card image cap" />
						</Card>
					</a>
				</div>
				<div className=" col-12 col-md-3 my-2">
					<a
						href="https://www.akshayapatra.org/covid-relief-services"
						rel="noreferrer"
						target="_blank"
					>
						<Card className=" donationCard">
							<CardImg top width="100%" src={akshayPatra} alt="Card image cap" />
						</Card>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Donate;
