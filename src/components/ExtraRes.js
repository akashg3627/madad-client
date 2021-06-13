import { Container, Table } from 'reactstrap';
import { leads } from '../resources/leads';

const ExtraRes = () => {
    window.scrollTo(0,0);
    return (
        <Container className="mt-5 bg-light">
            <Table striped>
                <thead>
                    <tr className="row justify-content-center">
                        <th  className="col-6">Facility</th>
                        <th  className="col-6">Website Link</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((item) => {
                        return (
                            <tr className="row justify-content-center" key={item.key}>
                                <td className="col-6">{item.facility}</td>
                                <td className="col-6"> <a rel="noreferrer" target="_blank" href={item.link}>Click here to visit</a>  </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ExtraRes;