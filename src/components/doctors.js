//import { useHistory } from 'react-router';
import {  Container, Table } from 'reactstrap';
import { doctors } from '../resources/doctors';

const Doctors = () => {

    // const history=useHistory();

    // const contactUs = () =>{
    //     history.push('/contactus');
    // }

    window.scrollTo(0,0);
    return (   
        <div className="container mt-3">
            {/* <Card>
                <Button color="warning" onClick={contactUs}>
                    Doctor Registration
                </Button>
            </Card> */}
        
        <Container className="mt-5 bg-light">
            
            <Table striped>
                <thead>
                    <tr className="row justify-content-center">
                        <th  className="col-6">Doctors Name</th>
                        <th  className="col-6">Mobile Number</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((item) => {
                        return (
                            <tr className="row justify-content-center" key={item.key}>
                                <td className="col-6">{item.name}</td>
                                <td className="col-6">{item.mobile}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
        </div>
    );

}

export default Doctors;