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
                <h3 className="creditSubheader">Previous Work:</h3>
                <Row>
                    <Col>
                        <div className="creditWrapper">
                            <div className="bodyStyle">
                                Backend
                                <ul>
                                    <li>VGG 16/19 from the Keras library</li>
                                    <li>Haar Cascade Feature Classifiers</li>
                                    <li>Parameter modifications influenced from <a href="https://www.kaggle.com/andrewmvd/face-mask-detection/code">Kaggle notebooks</a></li>
                                    <li>MTCNN Face Detection</li>
                                </ul>
                                Frontend
                                <ul>
                                    <li>Reactstrap</li>
                                    <li>React-fade-in</li>
                                    <li>React-grid-gallery</li>
                                    <li>React-charts</li>
                                    <li>codemirror</li>
                                    <li>Images pulled from <a href='https://www.starpng.com/'>starpng</a></li>
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