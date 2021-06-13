import React, { useEffect } from 'react';
import { TabContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonor, fetchSeeker } from '../redux/ActionCreators';
import Loading from './Loading';

function Admin(props) {
    const donor = useSelector(state => state.donorReducer.donors);
    //const donorAuth= donor.filter((v)=>donor.donorType);
    const donLoad = useSelector(state => state.donorReducer.isLoading);
    const seeker = useSelector(state => state.seekerReducer.seekers);
    const seekLoad = useSelector(state => state.seekerReducer.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDonor());
        dispatch(fetchSeeker());
    }, [dispatch]);
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
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
                })
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
            if (donorAuth === null) {
                if (donorAuth.length < 1) {
                    return (
                        <RenderNoresult type="2" />
                    )
                }
                const d = donorAuth.map((d) => {
                    return (
                        <RenderCard d={d} type="2" />
                    )
                })
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
                })
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
            return (
                <div>
                    <Card>
    
                        <ButtonGroup color="primary" className="row ">
                            <Button color="primary" onClick={() => { toggle('1'); }}>Non-Auth Services</Button>
                            <Button color="primary" onClick={() => { toggle('2'); }} >Authorized Services</Button>
                            <Button color="primary" onClick={() => { toggle('3'); }}>Seek Requests</Button> </ButtonGroup>
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

    if (donLoad || seekLoad)
        return (
            <div className="container ">
                <div className="row mt-3 justify-content-center">
                    <Loading />
                </div>
            </div>
        );
    else {
        return (
            <div>
<RenderTab />
            </div>
        )
    }
}

export default Admin;