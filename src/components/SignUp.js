import React, { useState } from 'react';
import { FaRegIdBadge } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, ModalBody, Modal, Alert } from 'reactstrap';
import { sendOTPrequest, signupUser } from '../redux/ActionCreators';



function SignUpBtn(props) {
    const [modal, setModal] = useState(false);
    const [isOtpS, setOtpS] = useState('0');
    const [suAlert, setSUalert] = useState('0');
    const otpR = useSelector(state => state.users.num);
    // console.log("otpR",otpR, typeof otpR);
    const extOTP = parseInt(otpR);
    // console.log("extOTP",extOTP,typeof extOTP);
    const calcOTP = ((extOTP / 3) + 5) / 7;
    // console.log("calcOTP", calcOTP, typeof calcOTP);
    const strOTP = calcOTP.toString();
    const [user, setUser] = useState({});
    const toggleModal = () => {
        setModal(!modal);
    }
    const getOtpRes = (e) => {
        setOtpS(e);
        if (e !== '1') {
            setTimeout(() => {
                setOtpS('0');
            }, 5000)
        }

    }
    const getSignUpRes = (e) => {
        setSUalert(e);
        if (e !== '2') {
            setTimeout(() => {
                toggleModal();
                setSUalert('0');
            }, 3000);
        }
    }
    function SignUp({ toggleSignIn }) {
        const dispatch = useDispatch();

        const [password, setPass] = useState('');

        // const [isValidOtp, setOtpValid] = useState(false);
        const [tc, setTC] = useState(false);
        const [otp, setOtp] = useState('');
        const [name, setName] = useState('');
        const [mob, setMob] = useState('');
        const [email, setEmail] = useState('');

        const generateOtp = (e) => {
            e.preventDefault();
            setUser({
                "name": name,
                "mobileNumber": mob,
                "email": email ? email : null,
                "password": password
            });
            dispatch(sendOTPrequest({ "mobileNumber": mob }, getOtpRes, toggleModal));
        }

        function handleSignUp(e) {
            e.preventDefault();
            // console.log("otpR",otpR, typeof otpR);
            // console.log("extOTP",extOTP,typeof extOTP);
            // console.log("calcOTP", calcOTP, typeof calcOTP);
            // console.log("OTP",otp,typeof otp);
            if (otp === strOTP) {

                dispatch(signupUser(user, getSignUpRes, toggleModal));
                if (toggleSignIn) {
                    toggleSignIn();
                };
                // history.push("/profile");
            }
            else {
                getSignUpRes('2');
            }
        }

        return (
            <div>
                <Form onSubmit={generateOtp}>
                    <FormGroup>
                        <Label for="name">Name*</Label>
                        <Input  disabled={isOtpS === '1'} type="text" name="name" required id="name" onChange={e => setName(e.target.value)} placeholder="Enter your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mob">Mobile No.*</Label>
                        <Input  type="tel" pattern="[1-9]{1}[0-9]{9}" name="mob" required id="mob" disabled={isOtpS === ''} onChange={e => setMob(e.target.value)} placeholder="Enter your 10-digit Mobile Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Create your password*</Label>
                        <small>(min 4-digit)</small>
                        <Input type="password" name="password" required id="password" disabled={isOtpS === '1'} onChange={e => setPass(e.target.value)} placeholder="Create password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input  type="email" name="email" id="email" disabled={isOtpS === '1'} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />
                    </FormGroup>
                    <FormGroup check className="mb-4 ml-3">
                        <Label check>
                            <Input type="checkbox" name="tc" id="tc" disabled={isOtpS === '1'} onChange={e => setTC(!tc)} />{' '}
                             I accept the <Link className="" to="/tnc" rel="noreferrer" target="_blank">Terms and Conditions</Link>
                        </Label>
                    </FormGroup>
                    <Button color="primary" type="submit" className="m-auto" disabled={!tc} >Generate OTP</Button>
                    {isOtpS === '2' ? <Alert>User already exist! SignIn please...</Alert> : null}
                    {isOtpS === '-1' ? <Alert>Could not send OTP, Try again later.</Alert> : null}
                </Form>
                {isOtpS === '1'
                    ?
                    <div>
                        <Alert>OTP has been sent to your entered Mobile No.</Alert>
                        <Form onSubmit={handleSignUp}>
                            <FormGroup>
                                <Label for="otp">4-digit OTP</Label>
                                <Input type="text" name="otp" required id="otp" onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
                            </FormGroup>
                            <Button color="success" block className="mt-1" type="submit">SignUp</Button>
                            <Button color="danger" block className="mt-1" onClick={toggleModal}>Cancel</Button>
                            {suAlert === '1' ? <Alert>Signed Up Successfully!</Alert> : null}
                            {suAlert === '-1' ? <Alert>Could not Sign Up, Try again later!</Alert> : null}
                            {suAlert === '2' ? <Alert>Oops! Entered wrong OTP</Alert> : null}
                        </Form>
                    </div>
                    :
                    null
                }
            </div>
        );
    }



    return (
        <div>
            <div onClick={toggleModal}><FaRegIdBadge /> Sign Up</div>
            <Modal isOpen={modal} toggle={toggleModal} >
                <ModalBody><SignUp /></ModalBody>
            </Modal>
        </div>
    );
}

export default SignUpBtn;