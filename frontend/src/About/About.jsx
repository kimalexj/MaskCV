import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col } from 'reactstrap';
import maskImage from '../img/coronaImage.png';
import './About.css';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="tabsWrapper">
          <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('1')}>
                    Motivation
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('2')}>
                    Setup
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('3')}>
                    Data
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('4')}>
                    Techniques
                </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="tabContentWrapper">
                <TabPane tabId="1">
                    <Container>
                        <Row>
                            <Col>
                                Text (Facts about mask wearing etc...)
                                Consequences of improper equipment
                            </Col>
                            <Col>
                                Images
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="2">
                    <div className="innerTab">
                        <h4 className="tabSubheader">Problem:</h4>
                        <p className="statement"> From images, can we tell if someone is wearing a mask or not wearing a mask? If someone is wearing
                            a mask, can we tell if they are wearing it properly?
                        </p>
                        <br />
                        <h4 className="tabSubheader">Breakdown:</h4>
                            <ul className="listWrapper">
                                <li className="listEntry">Face detection</li>
                                <li className="listEntry">Facial feature detection - (Are the mouth and nose fully covered?)</li>
                                <li className="listEntry">Face mask detection - (Yes, no, or incorrect)</li>
                                <li className="listEntry">Data for training/testing - (Kaggle/Github) </li>
                            </ul>
                        <br />
                        <h4 className="tabSubheader">Flow Diagram:</h4>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <Container>
                        <Row>
                            <Col sm="8">
                                <h4 className="tabSubheader">Sources:</h4>
                                <ul className="listWrapper">
                                    <li className="listEntry"><a target="_blank" rel="noreferrer" href="https://www.kaggle.com/andrewmvd/face-mask-detection">Kaggle Testing Data</a> (1)</li>
                                    <li className="listEntry"><a target="_blank" rel="noreferrer" href="https://www.kaggle.com/spandanpatnaik09/face-mask-detectormask-not-mask-incorrect-mask">Kaggle Training Data</a> (2)</li>
                                    <li className="listEntry"><a target="_blank" rel="noreferrer" href="https://github.com/sightmachine/SimpleCV/tree/master/SimpleCV/Features/HaarCascades">Haar Cascade facial feature .xml files</a> (3)</li>
                                </ul>
                                <br />
                                <h4 className="tabSubheader">Purpose:</h4>
                                <ul className="listWrapper">
                                    <li className="listEntry">
                                        (1) This data set, consisting of 853 images, was primarily used for training our models. The annotations consisted 
                                        of 3 separate classes: mask, no mask, and incorrectly worn mask.
                                    </li>
                                    <li className="listEntry">
                                        (2) This data set, consisting of 2079 images, was used for testing our models. The images were organized into three
                                        separate classes: mask, no mask, and incorrectly worn mask.
                                    </li>
                                    <li className="listEntry">
                                        (3) Held serialized (in .xml format) pre-trained classifiers that used Haar Cascade to detect various facial features.
                                        In our case, we utilized the classifiers for "mouth" and "nose" to be put into OpenCV.
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="1"></Col>
                            <Col sm="3">
                                <img src={maskImage} />
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="4">
                    <div className="innerTab">
                        <h4 className="tabSubheader">Algorithms:</h4>
                        <ul className="listWrapper">
                            <li className="listEntry">Haar Cascade Face Detection</li>
                        </ul>
                        <br />
                        <h4 className="tabSubheader">Models:</h4>
                    </div>
                </TabPane>
          </TabContent>
        </div>
    );
}

export default AboutPage;