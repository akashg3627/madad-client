import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import SignInBtn from "../SignIn";
// import tick from './images/tick.png'
import SignUpBtn from "../SignUp";
import { provide, seek } from "../../Images";
import { useHistory } from "react-router";
import "./providerForm.css";

const Example = () => {
	const isAuth = useSelector((state) => state.users.isAuth);
	// const isAuth =true;

	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleR = () => {
		history.push("/register/provider");
	};
	const handleS = () => {
		history.push("/register/seeker");
	};

	return (
		<div className="container-fluid container-70">
			{isAuth ? (
				<div className="row cardDiv">
					<div className="col-11 col-md-5 chooseCard" onClick={() => handleR()}>
						<img className="chooseImg" src={provide} alt="" />
						<div className="chooseText">I Want To Help</div>
					</div>
					<div className=" col-11 col-md-5 chooseCard" onClick={() => handleS()}>
						<img className="chooseImg" src={seek} alt="" />
						<div className="chooseText">I Need Help</div>
					</div>
				</div>
			) : (
				<div
					className="text-center d-flex mt-3"
					style={{
						justifyContent: "space-evenly",
						flexWrap: "wrap",
						alignItems: "stretch",
					}}
				>
					<div style={myStyle.card}>
						<h3 style={myStyle.cardHeading}>Existing User?</h3>
						<p>Kindly SignIn to register your service/request</p>
						<Button color="warning">
							<SignInBtn />
						</Button>
					</div>
					<div style={myStyle.card}>
						<h3 style={myStyle.cardHeading}>New User?</h3>
						<p>If you are a new User of MADAD, Please sign up</p>
						<Button color="success">
							<SignUpBtn />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

const myStyle = {
	card: {
		padding: "20px",
		borderRadius: "10px",
		margin: "10px",
		boxShadow: "0 0 5px 1px rgba(0,0,0,0.7)",
		backgroundColor: "#ececec",
	},
	cardHeading: {
		fontFamily: "Ubuntu",
	},
};

export default Example;
