import { Col, Row, Container } from 'reactstrap';
import './Credits.css';

const CreditsPage = () => {
    return (
        <div className="teamWrapper">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="creditWrapper">
                            <h3>Team Members:</h3>
                            <ul>
                                <li>Alexander Kim</li>
                                <li>Adnan Ahmad</li>
                                <li>Angelito Somera</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="6">
                        <h3>Preexisting Components:</h3>
                        <ul>
                            <li>VGG 16/19</li>
                            <li>Haar Cascade Feature Classifier</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreditsPage;