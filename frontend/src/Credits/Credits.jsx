import { Col, Row, Container } from 'reactstrap';
import ReactRoundedImage from 'react-rounded-image';
import p1 from '../img/profile/microbe.png';
import p2 from '../img/profile/microbe2.png';
import p3 from '../img/profile/microbe3.png';
import './Credits.css';
import React from 'react';

const CreditsPage = () => {
    return (
        <div className="teamWrapper">
            <Container>
                <h3 className="creditSubheader">Team Members:</h3>
                <Row className="creditWrapper bodyStyle">
                    <div className="profilePic">
                        <ReactRoundedImage image={p1} imageWidth="150" imageHeight="150" roundedColor="whitesmoke" hoverColor="#84bcb3"/>
                        <p className="name">Alexander Kim</p>
                    </div>
                    <div className="profilePic">
                        <ReactRoundedImage image={p2} imageWidth="150" imageHeight="150" roundedColor="whitesmoke" hoverColor="#84bcb3" />
                        <p className="name">Adnan Ahmad</p>
                    </div>
                    <div className="profilePic">
                        <ReactRoundedImage image={p3} imageWidth="150" imageHeight="150" roundedColor="whitesmoke" hoverColor="#84bcb3" />
                        <p className="name">Angelito Somera</p>
                    </div>
                    
                </Row>
                <br />
                <h3 className="creditSubheader">Preexisting Components:</h3>
                <Row>
                    <Col>
                        <div className="creditWrapper">
                            <div className="bodyStyle">
                                <ul>
                                    <li>VGG 16/19</li>
                                    <li>Haar Cascade Feature Classifier</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreditsPage;