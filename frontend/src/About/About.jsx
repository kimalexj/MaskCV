import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, Card, CardHeader, Button } from 'reactstrap';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/duotone-light.css';

import FadeIn from 'react-fade-in';
import maskImage from '../img/coronaImage.png';
import flow from '../img/flowdiagram.png';
import woman from '../img/woman.png';
import sick from '../img/sick.png';
import './About.css';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [codeBlockOne, changeCodeBlockOne] = useState('vgg16 = VGG16(weights=\'imagenet\', include_top=False, input_shape=(128,128,3))\nmodel = Sequential()\nmodel.add(vgg16)\nmodel.add(Flatten())\nmodel.add(Dense(3, activation=\'sigmoid\'))\nmodel.compile(optimizer="adam", loss="categorical_crossentropy", metrics ="accuracy")\nes = EarlyStopping(monitor=\'val_loss\', patience=8, verbose=0, min_delta=0.001, mode=\'auto\')\nhistory = model.fit(train_generator, steps_per_epoch=4, validation_data=test_generator, validation_steps=4, epochs=400, callbacks=[es])');

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
                                <img style={{paddingLeft: '40px'}} src={sick} alt="sick"/>
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
                                        <li className="listEntry">Face mask detection - (Yes, no, or incorrect)</li>
                                        <li className="listEntry">Data for training/testing mask detection - (Kaggle/Github) </li>
                                        <li className="listEntry">Facial feature detection - (Are the mouth and nose fully covered in incorrect case?)</li>
                                    </ul>
                                <br />
                                <h4 className="tabSubheader">Flow Diagram:</h4>
                                <img src={flow} alt="flow"/>  
                            </Col>
                            <Col sm="2"></Col>
                            <Col sm="4">
                                <img className="womanImage" src={woman} alt="woman"/>
                                <div className="cardWrapper">
                                    <Card body className="singleCard">
                                        <CardHeader>Haar Cascade Classifier</CardHeader>
                                        <Button href="https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card>
                                    <Card body className="singleCard">
                                        <CardHeader>VGG16</CardHeader>
                                        <Button href="https://neurohive.io/en/popular-networks/vgg16/" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card>
                                    <Card body className="singleCard">
                                        <CardHeader>VGG19</CardHeader>
                                        <Button href="https://iq.opengenus.org/vgg19-architecture/" target="_blank" rel="noreferrer" color="info">Learn More</Button>
                                    </Card> 
                                    <Card body>
                                        <CardHeader>MTCNN</CardHeader>
                                        <Button href="https://towardsdatascience.com/face-detection-using-mtcnn-a-guide-for-face-extraction-with-a-focus-on-speed-c6d59f82d49" target="_blank" rel="noreferrer" color="info">Learn More</Button>
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
                                <img style={{paddingLeft: '10px'}} src={maskImage} alt="maskImage"/>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="4">
                    <div className="innerTab">
                        <h4 className="tabSubheader">Code:</h4>
                        <ul className="listWrapper">
                            <li><a className="datalink" href="https://github.com/kimalexj/MaskCV">GitHub</a></li>
                        </ul>
                        <br />
                        <h4 className="tabSubheader">Algorithms:</h4>
                        <ul className="listWrapper">
                            <li className="listEntry"><a className="datalink" href="https://hackprojects.wordpress.com/tutorials/opencv-python-tutorials/opencv-nose-detection-using-haar-cascades/">Haar Cascade Face/Feature Detection for nose + mouth detection</a></li>
                            <li className="listEntry"><a className="datalink" href="https://intellica-ai.medium.com/a-guide-for-building-your-own-face-detection-recognition-system-910560fe3eb7">MTCNN for Face Detection</a></li>
                            <li className="listEntry"><a className="datalink" href="https://keras.io/api/applications/vgg/">VGG16/VGG19 for detecting if mask is on</a></li>
                        </ul>
                        <br />
                        <h4 className="tabSubheader">Models:</h4>
                        <p>We wanted to decide to between VGG16 or VGG19 to see if one would perform more effectively with our datasets than the other.
                        Scanning the kaggle notebooks of people who have trained a model to provide mask detection showed examples of VGG19 but not VGG16 and
                        that was another part of the reason why we chose to do so. In the end, we found that VGG16 actually performed slightly better than 
                        VGG19. 
                        <br />
                        <br />
                        After familiarizing ourselves with <a className="datalink" href="https://keras.io/">Keras</a> and experimenting with the parameters of the model,
                        we found that <b>augmenting</b> the dataset, adding a built-in dense layer on top of VGG16/19 that applied a <b>sigmoid activation</b>, keeping the <b> 
                        batch size </b> at around 128, and utilizing <b>Early Stopping</b> to prevent overfitting produced the best <a className="datalink" href="#/Results">results</a>.
                        Increasing the batch size helped to reduce the fluctuations we initially saw in the validation loss and using Early Stopping to monitor
                        the validation loss allowed us to set the number of epochs to train at a high value without a worry of overtraining.
                        </p>
                        <CodeMirror
                            value={codeBlockOne}
                            options={{
                                mode: 'python',
                                theme: 'duotone-light',
                                tabSize: 4,
                                keyMap: 'sublime',
                                autoRefresh: true,
                                lineNumbers: false
                            }}
                        />
                        <br />
                        <br />
                        <h4 className="tabSubheader">Process and Issues:</h4>
                        <p>A significant portion of this project involved researching for resources that we could use in our code.
                        We tried exploring the idea of just using one neural network at first, but we then realized it would be better in
                        terms of accuracy to just crop out faces and feed that into our trained neural network. This network was designed to identify
                        features from the image of a single face and classify it into <b>one of three</b> distinct categories:
                        (a) face wearing mask, (b) face not wearing mask, and (c) face wearing mask incorrectly.
                        <br></br>
                        <br></br>
                        We first started with Haar Cascade for face detection, but we soon ran into issues. Haar Cascade does
                        not work well on faces with masks on them because they use other features to extract face coordinates. Those features
                        were being covered by the mask. It also requires
                        fine tuning some parameters. We were able to adjust them to work to a degree but it was not as robust as we would have hoped.
                        As a result, we ended up using <b>MTCNN</b> as it had much better performance in detecting faces. MTCNN uses a convolutional 
                        neural network to detect faces and as a whole was more effective than Haar Cascade.
                        <br></br>
                        <br></br>
                        Our first step then was detecting and getting coordinates for each face in an image with MTCNN and then 
                        cropping them out individually. We then passed the cropped face to our trained neural network which would classify
                        the image in one of the three groups as mentioned above. If an image was identified as an 'incorrectly worn mask'
                        we used Haar Cascade to detect noses and mouths. If a nose or mouth was detected, we would tell
                        the user that the mask was worn incorrectly because a nose or mouth was openly visible.
                        <br></br>
                        <br></br>
                        To note, we did not want to use Haar Cascade for nose and mouth because it did not do too well in detecting noses or mouths
                        well either. We looked into using <a className="datalink" href="https://www.pyimagesearch.com/2017/04/10/detect-eyes-nose-lips-jaw-dlib-opencv-python/">dlib</a> but
                        that predicted where noses and mouths were located based on the bounding box for the face. The only other option
                        we thought of at this point was to create our own neural networks to be trained on images of noses and mouths. However, we
                        thought for the sake of time and interest that it would be more efficient to improve our main mask detection model. So,
                        we decided to stick with Haar Cascade for feature detection.
                        </p>
                        <br />
                        <br />
                        <h4 className="tabSubheader">Moving Forward:</h4>
                        <p>Given more time, the next step for our project would involve improving upon our code's ability to extract facial features, specifically
                        noses and mouths. Our current implementation, which utilizes Haar Cascade, is often flawed and results in many cases where these features
                        are incorrectly detected. The proposed solution to this issue was to build new datasets for noses and mouths with the intent to train separate
                        models capable of classifying them. Ideally, this change would decrease the amount of error in our detection and allow us to more accurately
                        display information regarding "incorrect" mask usage.
                        <br></br>
                        <br></br>
                        Beyond this, having a more accurate method of feature extraction could allow us to provide more robust information to solve the problems regarding
                        mask wearing. One idea was to expand upon how our code recognizes "Incorrect" masks by including and displaying steps to achieve "Correct" mask usage.
                        For instance, if a person was wearing a mask incorrectly, and our code was able to detect that a nose was not covered, it could provide
                        a message such as "Pull mask over nose." Upon following these steps, a person would, in theory, be classified as wearing a mask "correctly".
                        </p>
                        <br />
                        <br />
                        <h4 className="tabSubheader">Comparing our Approach:</h4>
                        <p>What separates our approach from the other kaggle notebooks on mask detection was our decision to implement
                        MTCNN instead of Haar Cascade. As previously mentioned, we found that Haar Cascade tended to preform poorly when attempting to detect
                        faces with masks. Also, the need to fine tune the face detection parameters became cumbersome and difficult to properly apply to our dataset.
                        As a convolutional neural network, MTCNN was a better and more accurate tool to use for detecting faces. Its performance also did not depend on
                        us fine tuning specific parameters, making the setup more convenient as well. In that regard, MTCNN's effectiveness was extremely beneficial
                        for our model's overall performance.
                        <br></br>
                        <br></br>
                        Another difference in our approach was adding the step of detecting noses and mouths on faces with "incorrect" mask usage. The idea
                        was to be able to display more helpful information to solve improper mask wearing. However, this addition turned out to be much more
                        complex than we initially believed. Our use of Haar Cascade for this step resulted in poor facial feature detection which limited our
                        code's ability to find the specific errors in mask wearing. Ultimately, this portion became a drawback and despite keeping Haar Cascade
                        as our method of feature extraction, we thought it would be more beneficial to attempt other options in the future.
                        </p>
                    </div>
                </TabPane>
          </TabContent>
        </div>
    );
}

export default AboutPage;