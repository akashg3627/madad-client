import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import emailjs from "emailjs-com";
import "./Contactus.css";
import { lp2 } from "../../Images";
// import { useSelector } from "react-redux";

export default function ContactUs() {
	// const isAuth = useSelector(state=>state.users.isAuth)
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm("service_cxdt4z9", "template_7pnsjag", e.target, "user_T37xBHudJO9m0oYsi8ZQ0")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	const [yo1, setYo1] = useState(false);
	const [yo2, setYo2] = useState(false);
	const [yo3, setYo3] = useState(false);
	const [t1, setT1] = useState("");
	const [t2, setT2] = useState("");
	const [t3, setT3] = useState("");

	return (
		<div
			className="container-fluid container-70 contactus"
			style={{ marginTop: 20, marginBottom: 20 }}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "stretch",
					padding: "10px",
				}}
			>
				<Form onSubmit={sendEmail} style={{ marginTop: 40 }}>
					<div
						className="container-div p-3 pt-4 pb-4"
						style={{
							color: "#ffffff",
							textAlign: "center",
							fontFamily: "Ubuntu",
							backgroundColor: "#7722df",
						}}
					>
						YOUR FEEDBACKS/SUGGESTIONS ARE MOST WELCOMED !
					</div>
					<div className="p-4">
						<FormGroup>
							<Label
								for="name"
								style={{ color: "black" }}
								className={yo1 ? "myLabel up" : "myLabel down"}
							>
								Full Name <span style={{ color: "red" }}>*</span>
							</Label>
							<Input
								type="text"
								name="user_name"
								id="name"
								onFocus={() => {
									setYo1(true);
								}}
								onBlur={() => {
									if (t1 === "") setYo1(false);
								}}
								onChange={(e) => {
									setT1(e.target.value);
								}}
								required
							/>
						</FormGroup>

						<FormGroup>
							<Label
								for="email"
								style={{ color: "black" }}
								className={yo2 ? "myLabel up" : "myLabel down"}
							>
								Email <span style={{ color: "red" }}>*</span>
							</Label>
							<Input
								type="email"
								name="user_email"
								id="email"
								onFocus={() => {
									setYo2(true);
								}}
								onBlur={() => {
									if (t2 === "") setYo2(false);
								}}
								onChange={(e) => {
									setT2(e.target.value);
								}}
								required
							/>
						</FormGroup>

						<FormGroup>
							<Label
								for="comments"
								style={{ color: "black" }}
								className={yo3 ? "myLabel up" : "myLabel down"}
							>
								Feedbacks/Comments <span style={{ color: "red" }}>*</span>
							</Label>
							<Input
								type="textarea"
								name="message"
								id="comments"
								required
								onFocus={() => {
									setYo3(true);
								}}
								onBlur={() => {
									if (t3 === "") setYo3(false);
								}}
								onChange={(e) => {
									setT3(e.target.value);
								}}
								rows="1"
							/>
						</FormGroup>
						<FormGroup
							check
							style={{
								paddingLeft: "0",
								width: "50%",
								margin: "100px auto 0 auto",
							}}
						>
							<Button color="warning" block type="submit" value="Send">
								Send
							</Button>
						</FormGroup>
					</div>
				</Form>
				<img
					src={lp2}
					style={{ maxWidth: "55%", minHeight: "70vh", marginTop: 40 }}
					alt="poster"
				/>
			</div>
			{/*<div className="container-link" style={{ textAlign: "center" }}>
				<span className="create">
					<a href="http://gymkhana.iiti.ac.in/#" className="link">
						Gymkhana IIT Indore
					</a>
				</span>
			</div>*/}
		</div>
	);
}
