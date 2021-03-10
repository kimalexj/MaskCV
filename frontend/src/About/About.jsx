import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, Card, CardHeader, Button } from 'reactstrap';
import FadeIn from 'react-fade-in';
import maskImage from '../img/coronaImage.png';
import flow from '../img/flowdiagram.png';
import woman from '../img/woman.png';
import sick from '../img/sick.png';
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
                                <FadeIn transitionDuration="1300" delay="60">
                                    <div>
                                        <p className="motivQuote" style={{textDecoration: 'underline' }}>More than ever, we need to consider the risks associated with not wearing masks</p>
                                    </div>
                                    <div className="motivQuote">
                                        <p>
                                            "According to Johns Hopkins University, there have been more than 28.8 million cases of COVID-19
                                            reported across the United States and more than 520,000 people have died from the virus."
                                        </p>
                                    </div>
                                    <div className="motivQuote">
                                        <p>
                                            "As a result of COVID-19, the World Health Organization claims that nearly half of the 3.3
                                            billion workers globaly have the potential to lose their livelihoods. This lack of income will
                                            ultimately lead to an inability to support families."
                                        </p>
                                    </div>
                                    <div className="motivQuote">
                                        <p>
                                            "A study published by <i>Health Affairs</i> concluded that mask mandates led to a slowdown in 
                                            daily COVID-19 growth rate. After three weeks, the daily growth rate had dropped by almost 2 percent."
                                        </p>
                                    </div>
                                    <div className="motivQuote">
                                        <p>
                                            "Infectious disease specialist Peter Chin-Hong alongside a group of scientists suggested in a simulation that
                                            80% of the population wearing masks would make a larger impact on reducing COVID-19 than a lockdown.""
                                        </p>
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col>
                                <img style={{paddingLeft: '40px'}} src={sick} />
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
                            <li className="listEntry"><a href="https://hackprojects.wordpress.com/tutorials/opencv-python-tutorials/opencv-nose-detection-using-haar-cascades/">Haar Cascade Face/Feature Detection for nose + mouth detection</a></li>
                            <li className="listEntry"><a href="https://intellica-ai.medium.com/a-guide-for-building-your-own-face-detection-recognition-system-910560fe3eb7">MTCNN for Face Detection</a></li>
                            <li className="listEntry"><a href="https://keras.io/api/applications/vgg/">VGG 16/VGG 19 for detecting if mask on</a></li>
                        </ul>
                        <br />
                        <h4 className="tabSubheader">Models:</h4>
                        <h4 className="tabSubheader">Process and Issues:</h4>
                        <p>A lot of this project was researching for resources that we could use in our code.
                        We tried exploring the idea of just using one neural network at first, but we then realized it would be better in
                        terms of accuracy to just crop out faces and feed that to our trained neural network. Our trained neural network can identify
                        features from one single face and classify an image into 3 distinct categories:
                        (a) face wearing mask, (b) face not wearing mask, and (c) face wearing mask incorrectly.
                        <br></br>
                        <br></br>
                        We first started with Haar Cascade for face detection, but we soon ran into issues. Haar Cascade does
                        not work well on faces with masks on them because they use other features to extract face coordinates. Those features
                        were being covered by the mask. It also requires
                        fine tuning some parameters. We were able to fine tune them to work but it was still not good enough.
                        We were hoping just to use Haar Cascade and our trained neural network, but we ended up using
                        MTCNN which is a much better face detector. MTCNN uses a convolutional neural network to detect faces and worked a lot better than
                        Haar Cascade.
                        <br></br>
                        <br></br>
                        Our main process was first detecting and getting coordinates for each face in an image with MTCNN, and then we would
                        crop each face. We then passed the cropped face to our trained neural network which would classify
                        the image in one of the three groups as mentioned above. If the group was identified as 'incorrectly worn mask'
                        then we used Haar Cascade to detect noses and mouths. If a nose or mouth was detected, we would tell
                        the user that the mask was worn incorrectly because a nose or mouth was showing.
                        <br></br>
                        <br></br>
                        We did not want to use Haar Cascade for nose and mouth because it did not really detect noses or mouths
                        well either. We looked into a method called <a href="https://www.pyimagesearch.com/2017/04/10/detect-eyes-nose-lips-jaw-dlib-opencv-python/">dlib</a> but
                        that predicted where noses and mouths were located based on the bounding box for the face. The only other option
                        was to create two neural networks to be trained on a lot of images of noses and mouths. However, it would take a lot
                        of time to find images to train on, and it was messy just using so many networks from the beginning. So,
                        we decided to stick with Haar Cascade and instead focus on training our mask model and making that better.

                        </p>
                        <h4 className="tabSubheader">Code:</h4>
                        <ul className="listWrapper">
                            <li><a href="https://github.com/kimalexj/MaskCV">GitHub</a></li>
                        </ul>

                    </div>
                </TabPane>
          </TabContent>
        </div>
    );
}

export default AboutPage;