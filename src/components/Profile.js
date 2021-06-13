import React, { useState, useEffect } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TabContent, TabPane, Card, CardBody, CardText, CustomInput, Input, Button, Row, Col, FormGroup, Form, ButtonGroup, Badge } from 'reactstrap';
import { donorUpdate, seekerUpdate, fetchUser } from '../redux/ActionCreators';
function Profile(props) {
    const history = useHistory();
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('token')));
    }, [dispatch]);
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    // console.log(user);
    const donorAuth = user.donorAuth;
    const donorNonAuth = user.donorNonAuth;
    const seeker = user.seeker;
    const handleReg = () => {
        history.push('/register');
    }
    


    const [name, setName] = useState('');
    const [mobileNumber, setMob] = useState('');
    const [email, setEmail] = useState('');
    const [edit, setEdit] = useState(false);
    // console.log(name, mobileNumber, email);

    function RenderNoresult({type}){
        return(
            <Card className="text-center pl-5 pr-5 pt-2">
                <h5>Not yet registered</h5>
                <Button  color="success" onClick={handleReg} className="btn btn-lg mt-2 pt-2 pb-2" >Register Now</Button>
            </Card>
        )
    }

    function RenderProfile() {
        return (
            <Card>
                <CardBody className="row align-items-center justify-content-center">
                    <CardText className="col-10 col-md-4"><Input disabled={!edit} placeholder={user.name} onChange={(e) => setName(e.target.value)} /></CardText>
                    <CardText className="col-10 col-md-3"><Input disabled placeholder={user.mobileNumber} onChange={(e) => setMob(e.target.value)} /></CardText>
                    <CardText className="col-10 col-md-4"><Input disabled={!edit} placeholder={user.email ? user.email : "Add Email"} onChange={(e) => setEmail(e.target.value)} /></CardText>
                    <CardText className="col-3 col-md-1"><Button disabled color="warning" onClick={() => setEdit(!edit)}><BiEditAlt /></Button></CardText>
                </CardBody>
            </Card>
        )
    }
    function RenderCard({ d, type }) {
        const isActive = (type==="1" || type==="2") ? d.isActive : !d.isCompleted;
        const [act, setAct] = useState(isActive);
        const handleUpdate =(v)=>{
            
            // console.log("update request ", v, d._id, type);
            if(type==="1" || type==="2"){
                dispatch(donorUpdate(d._id, {"isActive":v}));
            }
            else{
                dispatch(seekerUpdate(d._id, {"isCompleted":!v}));
            }

        }
        const handleAct = () => {
            handleUpdate(!act);
            setAct(!act);
        }
        
        return (
            <Card className="pl-3 align-item-center">
                <dl className="row">
                    <dt className="col-3">{d.services}{type==="2" ? <span>{d.status ? <Badge pill color="success">Verified</Badge> : <Badge pill color="warning">Verification Pending</Badge>}</span> : null}</dt>
                    <dt className="col-6">{d.city}</dt>
                    <dt className="col-2"><Form><FormGroup><CustomInput type="switch" name="act" id={d._id} checked={act} onChange={()=>handleAct()} label={act ? "Active" : "Non-Active"} /></FormGroup></Form></dt>
                </dl>
            </Card>
        )
    }
    function RenderDonorNonAuth() {
        if (donorNonAuth !== null) {
            if (donorNonAuth.length < 1) {
                return (
                    <RenderNoresult type="1" />
                )
            }
            const d = donorNonAuth.map((d) => {
                return (
                    <RenderCard d={d} type="1" />
                )
            }).reverse();
            return (
                <div>{d}</div>
            )
        }
        else {
            return (
                <RenderNoresult type="1" />
            )
        }
    }
    function RenderDonorAuth() {
        if (donorAuth !== null) {
            if (donorAuth.length < 1) {
                return (
                    <RenderNoresult type="2" />
                )
            }
            const d = donorAuth.map((d) => {
                return (
                    <RenderCard d={d} type="2" />
                )
            }).reverse();
            return (
                <div>{d}</div>
            )
        }
        else {
            return (
                <RenderNoresult type="2" />
            )
        }
    }
    function RenderSeeker() {
        if (seeker !== null) {
            if (seeker.length < 1) {
                return (
                    <RenderNoresult type="3" />
                )
            }
            const d = seeker.map((d) => {
                return (
                    <RenderCard d={d} type="3" />
                )
            }).reverse();
            return (
                <div>{d}</div>
            )
        }
        else {
            return (
                <RenderNoresult type="3" />
            )
        }
    }
    function RenderTab() {
        const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
        }

        return (
            <div>
                <Card>

                    <ButtonGroup color="primary" className="row ">
                        <Button color={activeTab==='1' ? "primary" : "warning"} onClick={() => { toggle('1'); }}>Non-Auth Services</Button>
                        <Button color={activeTab==='2' ? "primary" : "warning"} onClick={() => { toggle('2'); }} >Authorized Services</Button>
                        <Button color={activeTab==='3' ? "primary" : "warning"} onClick={() => { toggle('3'); }}>Seek Requests</Button> </ButtonGroup>
                </Card>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <RenderDonorNonAuth />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <RenderDonorAuth />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <RenderSeeker />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
    return (
        <div className="container-fluid container-70">
            <RenderProfile />
            <RenderTab />
        </div>
    );
}

export default Profile;


