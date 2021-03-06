import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, Card, CardHeader, Button } from 'reactstrap';
import maskImage from '../img/coronaImage.png';
import flow from '../img/flowdiagram.png';
import woman from '../img/woman.png';
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
                                <div>
                                    <p></p>
                                </div>
                            </Col>
                            <Col>
                                Images
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="2">
                    <Container>
                        <Row>
                            <Col sm="6">
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
                                <img src={flow} />  
                            </Col>
                            <Col sm="2"></Col>
                            <Col sm="4">
                                <img className="womanImage" src={woman} />
                                <div className="cardWrapper">
                                    <Card body className="singleCard">
                                        <CardHeader>Haar Cascade Classifier</CardHeader>
                                        <Button href="https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card>
                                    <Card body className="singleCard">
                                        <CardHeader>VGG16</CardHeader>
                                        <Button href="https://neurohive.io/en/popular-networks/vgg16/" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card>
                                    <Card body>
                                        <CardHeader>VGG19</CardHeader>
                                        <Button href="https://iq.opengenus.org/vgg19-architecture/" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="3">
                    <Container>
                        <Row>
                            <Col sm="8">
                                <h4 className="tabSubheader">Sources:</h4>
                                <ul className="listWrapper">
                                    <li className="listEntry"><a className="datalink" target="_blank" rel="noreferrer" href="https://www.kaggle.com/andrewmvd/face-mask-detection">Multiple Headshot Images</a> (1)</li>
                                    <li className="listEntry"><a className="datalink" target="_blank" rel="noreferrer" href="https://www.kaggle.com/spandanpatnaik09/face-mask-detectormask-not-mask-incorrect-mask">Single Headshot Images (3 classes)</a> (2)</li>
                                    <li className="listEntry"><a className="datalink" target="_blank" rel="noreferrer" href="https://github.com/sightmachine/SimpleCV/tree/master/SimpleCV/Features/HaarCascades">Haar Cascade Facial Feature XML files</a> (3)</li>
                                </ul>
                                <br />
                                <h4 className="tabSubheader">Purpose:</h4>
                                <ul className="listWrapper">
                                    <li className="listEntry">
                                        (1) This data set, consisting of 853 images, was primarily used as sample inputs to our mask detection model. 
                                        By finding the locations of all of the faces in the image, cropping them out, and inputting them
                                        into our mask detection model, we were able to test our model's accuracy while also providing proper labels on
                                        the images themselves.
                                    </li>
                                    <li className="listEntry">
                                        (2) This data set, consisting of 2079 images, was used for training/testing our mask detection model. 
                                        The images were organized into three separate classes: mask, no mask, and incorrectly worn mask. About 3/4
                                        of the images in each class were used for training and a 1/4 was used for testing.
                                    </li>
                                    <li className="listEntry">
                                        (3) Held serialized (in XML format) pre-trained classifiers that used Haar Cascade to detect various facial 
                                        features. In our case, we utilized the classifiers for "mouth" and "nose" to be put into OpenCV.
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="1"></Col>
                            <Col sm="3">
                                <img style={{paddingLeft: '10px'}} src={maskImage} />
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