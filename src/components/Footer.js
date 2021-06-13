import { GrFacebook, GrInstagram, GrTwitter, GrMail, GrLinkedin } from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";

import React from "react";
import { Link } from "react-router-dom";
import { iiti, gym } from "../Images";

function Footer(props) {
	return (
		<div className="footer">
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-5 col-sm-2 ">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/donors">Resources</Link>
							</li>
							<li>
								<Link to="/seekers">Helpout</Link>
							</li>
							<li>
								<Link to="/contactus">Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className="col-5 col-sm-3 ">
						<h5>Quick Links</h5>
						<ul className="list-unstyled">
							<li className="list-unstyled">
								<a
									href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQjwsqmEBhDiARIsANV8H3Z9S2QOOEpwE5kNxleFkJ0lr57jaTgfQk7WJOBPfwKZ-XJP8ZJib-4aAqSgEALw_wcB"
									rel="noreferrer"
									target="_blank"
								>
									WHO
								</a>
							</li>
							<li className="list-unstyled">
								<a
									href="https://www.aarogyasetu.gov.in/"
									rel="noreferrer"
									target="_blank"
								>
									Arogya Setu
								</a>
							</li>
							<li className="list-unstyled">
								<a
									href="https://www.mohfw.gov.in/"
									rel="noreferrer"
									target="_blank"
								>
									Ministry of Health
								</a>
							</li>
							<li className="list-unstyled">
								<a href="https://www.nhp.gov.in/" rel="noreferrer" target="_blank">
									National Health Portal
								</a>
							</li>
						</ul>
					</div>
					<div className="col-10 col-sm-4 align-self-center">
						<div className="text-center  m-auto">
							<ul className="list-group list-group-horizontal ">
								<li className="list-unstyled p-3">
									<a
										href="https://www.facebook.com/madad.covidSupport/about/"
										rel="noreferrer"
										target="_blank"
									>
										<GrFacebook className="fs-lg" />
									</a>
								</li>
								<li className="list-unstyled p-3">
									<a
										href="https://twitter.com/MADAD34598902"
										rel="noreferrer"
										target="_blank"
									>
										<GrTwitter className="fs-lg" />
									</a>
								</li>
								<li className="list-unstyled p-3">
									<a
										href="https://www.instagram.com/madad_covid_support/"
										rel="noreferrer"
										target="_blank"
									>
										<GrInstagram className="fs-lg" />
									</a>
								</li>
								<li className="list-unstyled p-3">
									<a
										href="mailto:madad.iiti@gmail.com"
										rel="noreferrer"
										target="_blank"
									>
										<GrMail className="fs-lg" />
									</a>
								</li>
								<li className="list-unstyled p-3">
									<a
										href="https://www.linkedin.com/company/madad-iit-indore"
										rel="noreferrer"
										target="_blank"
									>
										<GrLinkedin className="fs-lg" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-sm-3 align-self-center text-center">
						<img height="120" width="120" className="m-2" src={iiti} alt="" />
						<img height="100" width="120" className="ml-2" src={gym} alt="" />
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<p className="text-muted text-center">
							<small>
								Disclaimer: The user understands that the data provided on this
								website is collected and verified by volunteers to the best of their
								ability. However we sincerely request the users to reverify and
								confirm the identity of any vendor or service provider. Since
								Madad.in is a non-profit initiative, supported by a team of SnT
								Council, IIT Indore, we do not ask for any donation or monetary
								support. Any commercial/ financial deal or purchase must be done by
								the user on his/her ability to judge the information. IIT Indore is
								not liable/ responsible in any way for any loss/damage of any kind
								(direct/ indirect/ consequential or otherwise). The user must
								understand that the real-time verification of the data is neither a
								responsibility, nor a liability of the SnTC/IIT Indore in any manner
								whatsoever.
							</small>
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<p className="text-muted">
							<BiCopyright></BiCopyright> Copyright 2021 MADAD
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
