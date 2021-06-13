import React, {useState} from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { loginUser } from '../redux/ActionCreators';
import SignUpBtn from './SignUp';





function SignInBtn(props) {
    // const isAuth = useSelector(state=>state.users.isAuth)
    const [modal, setModal]=useState(false);
    const [siRes, setSiRes]= useState('0');
    const toggleModal=()=>{
setModal(!modal);}
const getRes=(e)=>{
    setSiRes(e);
        setTimeout(()=>{
            toggleModal();
            setSiRes('0');
        },3000);
}

 function SignIn(props) {
    const dispatch = useDispatch();
    const [mob, setMob] = useState('');
    const [pin, setPin] = useState('');
     
    function handleSignIn(e){
    e.preventDefault();
    dispatch(loginUser({"mobileNumber": mob, "password": pin}, getRes));
    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
            <FormGroup>
                    <Label for="mob">Registered Number</Label>
                    <Input type="text" name="mob" required id="mob" onChange={e => setMob(e.target.value)} placeholder="Enter registered mobile no." />
            </FormGroup>
            <FormGroup>
                    <Label for="pin">Password</Label>
                    <Input type="password" name="pin" required id="pin" onChange={e => setPin(e.target.value)} placeholder="Enter password" />
            </FormGroup>
            <Label className="row ml-2">Are you new here. Click here to {' '}<strong className="signupCursor"><SignUpBtn toggleSignIn={toggleModal} /></strong></Label>
            <Button type="submit" block color="primary"  className="mt-3"> Sign In</Button>
            {siRes==='1' ? <Alert>Successfully Signed In!</Alert> : null}
            {siRes==='-1' ? <Alert>Opps! could not sign in, Try again!</Alert> : null}
            </Form>
        </div>
    );
}

    return (
        <div>
            <div onClick={toggleModal}><BiLogInCircle /> Sign In</div>
            <Modal isOpen={modal} toggle={toggleModal}>
<ModalBody><SignIn /></ModalBody>
            </Modal>
        </div>
    );
}

export default SignInBtn;