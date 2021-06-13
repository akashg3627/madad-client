import { Container, Table } from 'reactstrap';
import { data } from '../resources/data';

const CMFund = () => {
    window.scrollTo(0,0);
    return (
        <Container className="mt-5 bg-light">
            <Table striped>
                <thead>
                    <tr className="row">
                        <th  className="col-4">Fund's Names</th>
                        <th  className="col-3">UPI ID</th>
                        <th  className="col-3">QR Code Link for scanning and Donating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr className="row" key={item.key}>
                                <td className="col-4">{item.state}</td>
                                <td className="col-3">{item.upi}</td>
                                <td className="col-3"> <a rel="noreferrer" target="_blank" href={item.link}>Click here to donate</a>  </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default CMFund;