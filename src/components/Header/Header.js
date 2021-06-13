import React, { useState, useEffect } from "react";

import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Button, ButtonGroup } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";

import { logoB } from "../../Images";

import { logOutUser } from "../../redux/ActionCreators";
import { useDispatch, useSelector } from "react-redux";
import SignUpBtn from "../SignUp";

import SignInBtn from "../SignIn";
import { BiLogOutCircle, BiUserCircle } from "react-icons/bi";

import "./Header.css";

function Header() {
	const history = useHistory();

	const [isNavOpen, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!isNavOpen);
	};

	const [showNav, setShowNav] = useState(true);
	var scrollPosition = 0;

	const handleScroll = () => {
		const position = window.pageYOffset;
		console.log("yo", position);
		console.log(scrollPosition);
		if (position > scrollPosition) {
			setShowNav(false);
			setNav(false);
		} else {
			setShowNav(true);
		}
		scrollPosition = position;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// const [isDropdownOpen,setDropdown] = useState(false);
	// const toggleDropdown = ()=>{
	//     setDropdown(!isDropdownOpen);
	// }

	const isAuth = useSelector((state) => state.users.isAuth);

	const dispatch = useDispatch();
	const handleCollapse = () => {
		if (isNavOpen) {
			toggleNav();
		}
	};

	const handleLogout = () => {
		dispatch(logOutUser());
		history.push("/home");
	};

	//    const help_seeker = () =>{
	//        history.push('/seekers');
	//    }

	//    const hover_dropdown =() =>{
	//     toggleDropdown();
	//    }

	return (
		<div className={showNav ? "myNavbar showNav" : "myNavbar hideNav"}>
			<Navbar light className="header-clr navbar-expand-custom">
				<div className="container-fluid">
					<NavbarBrand className="mr-auto" href="/home">
						{/* <Row className=" align-items-center">
                            <Col>
                                <img src={logo} alt='' height="90px" width="90px" />
                            </Col>
                            <Col className="ml-2">
                            <img src={title} alt='' height="90px" width="230px" />
                            </Col>
                        </Row> */}
						<img className="m-title" src={logoB} alt="" />
					</NavbarBrand>
					<NavbarToggler className="ml-auto" onClick={toggleNav} />
					<Collapse isOpen={isNavOpen} navbar>
						<Nav className="ml-auto text-center" navbar>
							<NavItem>
								<NavLink className="nav-link" to="/home" onClick={handleCollapse}>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/donors" onClick={handleCollapse}>
									Resources
								</NavLink>
							</NavItem>

							{/* <NavItem>
                                    <NavLink className="nav-link" to="/seekers" onClick={handleCollapse}>
                                      Help-Seekers
                                    </NavLink>
                            </NavItem> */}

							<NavItem>
								<NavLink className="nav-link " to="/seekers" onClick={handleCollapse}>
									Helpout
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link " to="/register" onClick={handleCollapse}>
									Register
								</NavLink>
							</NavItem>

							{/* <NavItem>
                                <NavLink className="nav-link" to="/donate"  onClick={handleCollapse}>
                                    Donation
                                    </NavLink>
                            </NavItem> */}
							{/*<NavItem>
								<NavLink className="nav-link" to="/awareness" onClick={handleCollapse}>
									Covid-Info
								</NavLink>
							</NavItem>*/}
							{/* <NavItem>
                                <NavLink className="nav-link" to="/doctors"  onClick={handleCollapse}>
                                    Doctors
                                    </NavLink>
                            </NavItem> */}
							<NavItem>
								<NavLink className="nav-link" to="/contactus" onClick={handleCollapse}>
									Contact Us
								</NavLink>
							</NavItem>
							{/* <NavItem>
                                <NavLink className="nav-link" to="/provider" onClick={handleCollapse}>
                                    Provider
                                </NavLink>
                            </NavItem> */}
							{isAuth ? (
								<NavItem>
									<NavLink className="nav-link profileLogo" to="/profile" onClick={handleCollapse}>
										<BiUserCircle />
									</NavLink>
								</NavItem>
							) : null}
							<NavItem className="ml-5 mr-5">
								{isAuth ? (
									<Button color="danger" onClick={handleLogout}>
										<BiLogOutCircle /> Logout
									</Button>
								) : (
									<ButtonGroup className="row">
										<Button className="col-6" color="primary">
											<SignInBtn />
										</Button>
										<Button className="col-6" color="warning">
											<SignUpBtn />
										</Button>
									</ButtonGroup>
								)}
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
			{/* <Modal isOpen={modal1} toggle={toggleSignIn}>
<ModalBody><SignIn /></ModalBody>
            </Modal>
            <Modal isOpen={modal2} toggle={toggleSignUp}>
<ModalBody><SignUp /></ModalBody>
            </Modal> */}
		</div>
	);
}

export default Header;
