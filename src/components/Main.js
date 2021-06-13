import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./Home/Home";

import Seeker from "./Seeker/Seekers";
import Contactus from "./Contactus/Contactus";
import Awareness from "./Awareness";
import Profile from "./Profile";

import Example from "./Register/providerForm";

import serve from "../resources/serviceWithImg";
import CMFund from "./CMFund";
import Donate from "./donate";
import tnc from "./tnc";
import ExtraRes from "./ExtraRes";
import Doctors from "./doctors";
import { useSelector } from "react-redux";

import Provider from "./Provider/Provider";
import DonorForm from "./Register/DonorForm";
import SeekerForm from "./Register/SeekerForm";

function Main() {
	const isAuth = useSelector((state) => state.users.isAuth);
	// const isAuth=true;
	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				isAuth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/home",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);

	const DonorWithId = ({ match }) => {
		return <Provider serve={serve.filter((s) => s.key === match.params.id)[0]} />;
	};
	const SeekerWithId = ({ match }) => {
		return <Seeker serve={serve.filter((s) => s.key === match.params.id)[0]} />;
	};
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/home" component={Home} />
				<Route exact path="/donors" component={Provider} />
				<Route exact path="/seekers" component={Seeker} />
				<Route path="/donors/:id" component={DonorWithId} />
				<Route path="/seekers/:id" component={SeekerWithId} />
				<Route exact path="/contactus" component={Contactus} />
				<Route exact path="/donate" component={Donate} />
				<Route exact path="/tnc" component={tnc} />
				<Route exact path="/cmfund" component={CMFund} />
				<Route exact path="/awareness" component={Awareness} />
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/register/provider" component={DonorForm} />
				<PrivateRoute exact path="/register/seeker" component={SeekerForm} />
				<Route exact path="/register" component={() => <Example />} />

				<Route exact path="/extraRes" component={ExtraRes} />
				<Route exact path="/doctors" component={Doctors} />
				<Redirect to="/home" />
			</Switch>
			<Footer />
		</div>
	);
}

export default Main;
