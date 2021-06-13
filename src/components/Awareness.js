import { Row, Col } from "reactstrap";

import {
	mentalHealthImg,
	vaccineImg,
	coronaPreventImg,
	whoImg,
	womanMaskImg,
	awareImg,
} from "../Images";

const Awareness = () => {
	return (
		<div className="container awareness-div d-flex flex-column bg-white mt-3 mb-3 p-5">
			<Row className="mb-3 bg-light p-5">
				<Col sm={12} lg={6} className="d-flex justify-content-center align-items-center">
					<img width="100%" style={{boxShadow:"2px 2px 20px 1px gray"}} height="400px" src={vaccineImg} alt="vaccination" />
				</Col>
				<Col sm={12} lg={6}>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<p className="desc myth-heading" style={{fontSize:"1.5rem"}}>MYTHS BUSTED</p>
						<ul className="myth-lists d-flex flex-column justify-content-center align-items-center">
							<li className="list-unstyled m-2 text-center">
								Vaccines contain unsafe toxins
							</li>
							<li className="list-unstyled m-2 text-center">
								The effectiveness of vaccinations has never been proven
							</li>
							<li className="list-unstyled m-2 text-center">
								If you've had Covid-19 already, you don't need to get vaccinated.
							</li>
							<li className="list-unstyled m-2 text-center">
								Corona vaccines use a live version of the coronavirus
							</li>
							<li className="list-unstyled m-2 text-center">
								Corona vaccines can alter your DNA
							</li>
						</ul>
						<a
							href="https://www.outlookindia.com/website/story/opinion-myths-and-fears-around-the-covid-19-vaccine-and-the-fact-check/372179"
							className="btn btn-danger mt-3"
						>
							Know More
						</a>
					</div>
				</Col>
			</Row>
			<Row className="blog-row mb-3 bg-dark p-5">
				<Col sm={12} lg={4} className="d-flex justify-content-center align-items-center">
					<img width="100%" src={whoImg} alt="WHO" />
				</Col>
				<Col
					sm={12}
					lg={4}
					className="d-flex flex-column justify-content-center align-items-center"
				>
					<img width="100%" src={coronaPreventImg} alt="WHO" />
				</Col>
				<Col sm={12} lg={4} className="d-flex justify-content-center align-items-center">
					<img width="100%" src={womanMaskImg} alt="prevent" />
				</Col>
			</Row>
			<Row className="blog-row bg-light p-5">
				<Col
					sm={12}
					lg={6}
					className="d-flex flex-column justify-content-center align-items-center"
				>
					<p className="desc">
						Not only has COVID-19 affected the physical health but also the mental
						well-being of people. There are huge chances that a mental health pandemic
						will follow as a result of COVID-19. Here, we bring you a dose of positivity
						by presenting the top 100 blogs which will make you beleive that you are not
						alone and we all, together, will defeat this pandemic.
					</p>
					<a
						className="btn btn-danger"
						href="https://neurowellnessspa.com/mental-health-blogs-2020/"
					>
						Read More
					</a>
				</Col>
				<Col sm={12} lg={6} className="d-flex justify-content-center align-items-center">
					<img width="100%" src={mentalHealthImg} alt="mental health" />
				</Col>
			</Row>
			<Row className="mt-4">
				<img width="100%" src={awareImg} alt="mental health" />
			</Row>
		</div>
	);
};

export default Awareness;
