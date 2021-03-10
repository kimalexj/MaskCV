import React, { useState } from 'react';
import { Chart } from 'react-charts'
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, } from 'reactstrap';
import Gallery from 'react-grid-gallery';

import './Results.css';

// Raw picture images
import img_one from '../img/raw/1.jpg';
import img_two from '../img/raw/2.jpg';
import img_three from '../img/raw/3.jpg';
import img_four from '../img/raw/4.jpg';
import img_five from '../img/raw/5.jpg';
import img_six from '../img/raw/6.png';
import img_seven from '../img/raw/7.jpg';
import img_eight from '../img/raw/8.jpeg';
import img_nine from '../img/raw/9.jpg';

// Classified picture images
import img_classified_one from '../img/classified/1.png';
import img_classified_two from '../img/classified/2.png';
import img_classified_three from '../img/classified/3.png';
import img_classified_four from '../img/classified/4.png';
import img_classified_five from '../img/classified/5.png';
import img_classified_six from '../img/classified/6.png';
import img_classified_seven from '../img/classified/7.png';
import img_classified_eight from '../img/classified/8.png';
import img_classified_nine from '../img/classified/9.png';

// Test graph
import test_graph from '../img/testgraph.png';

const images = [
    {
        src: img_one,
        thumbnail: img_one,
        thumbnailWidth: 400,
        thumbnailHeight: 289
    },
    {
        src: img_two,
        thumbnail: img_two,
        thumbnailWidth: 402,
        thumbnailHeight: 294
    },
    {
        src: img_three,
        thumbnail: img_three,
        thumbnailWidth: 400,
        thumbnailHeight: 226
    },
    {
        src: img_four,
        thumbnail: img_four,
        thumbnailWidth: 600,
        thumbnailHeight: 400
    },
    {
        src: img_five,
        thumbnail: img_five,
        thumbnailWidth: 301,
        thumbnailHeight: 400
    },
    {
        src: img_six,
        thumbnail: img_six,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_seven,
        thumbnail: img_seven,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_eight,
        thumbnail: img_eight,
        thumbnailWidth: 283,
        thumbnailHeight: 178
    },
    {
        src: img_nine,
        thumbnail: img_nine,
        thumbnailWidth: 390,
        thumbnailHeight: 280
    }
]

const classified_images = [
    {
        src: img_classified_one,
        thumbnail: img_classified_one,
        thumbnailWidth: 400,
        thumbnailHeight: 289
    },
    {
        src: img_classified_two,
        thumbnail: img_classified_two,
        thumbnailWidth: 402,
        thumbnailHeight: 294
    },
    {
        src: img_classified_three,
        thumbnail: img_classified_three,
        thumbnailWidth: 400,
        thumbnailHeight: 226
    },
    {
        src: img_classified_four,
        thumbnail: img_classified_four,
        thumbnailWidth: 600,
        thumbnailHeight: 400
    },
    {
        src: img_classified_five,
        thumbnail: img_classified_five,
        thumbnailWidth: 301,
        thumbnailHeight: 400
    },
    {
        src: img_classified_six,
        thumbnail: img_classified_six,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_classified_seven,
        thumbnail: img_classified_seven,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_classified_eight,
        thumbnail: img_classified_eight,
        thumbnailWidth: 283,
        thumbnailHeight: 178
    },
    {
        src: img_classified_nine,
        thumbnail: img_classified_nine,
        thumbnailWidth: 390,
        thumbnailHeight: 280
    }
]

function ResultsPage() {
    const [activeTab, setActiveTab] = useState('1');

    // Chart Data
    const loss_16 = React.useMemo(
        () => [
        {
            label: 'Training',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Validation',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
        ],
        []
    );
    const accuracy_16 = React.useMemo(
        () => [
        {
            label: 'Training',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Validation',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
        ],
        []
    );
    const loss_19 = React.useMemo(
        () => [
        {
            label: 'Training',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Validation',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
        ],
        []
    );
    const accuracy_19 = React.useMemo(
        () => [
        {
            label: 'Training',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Validation',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
        ],
        []
    );

    // Chart axes
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    );

    return (
        <Container>
            <Row>
                <div className="tabsWrapper">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab === '1' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('1')}>
                            VGG 16
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '2' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('2')}>
                            VGG 19
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="tabContentWrapper">
                        <TabPane tabId="1">
                            <Container>
                                <Row>
                                    <Col sm="4">
                                        <img src={test_graph} alt="graph_image_one" width="600" height="400"/>
                                    </Col>
                                    <Col sm="4">
                                        <img src={test_graph} alt="graph_image_one" width="600" height="400"/>
                                    </Col>
                                    <Col sm="4">
                                        <ul>
                                            <li>Training Accuracy: </li>
                                            <li>Testing Accuracy: </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </TabPane>
                        <TabPane tabId="2">
                            <Container>
                                <Row>
                                    <Col>
                                        <img src={test_graph} alt="graph_image_one" width="600" height="400"/>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Training Accuracy: </li>
                                            <li>Testing Accuracy: </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </TabPane>
                </TabContent>
                </div>
            </Row>

            <div className="galleryWrapper">
                <Row>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <h4 className="galleryTitle orig">Original</h4>
                        <Gallery 
                            backdropClosesModal={true}
                            images={images}
                        />
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <h4 className="galleryTitle process">Processed</h4>
                        <Gallery 
                            backdropClosesModal={true}
                            images={classified_images}
                        />
                    </Col>
                </Row>
            </div>
            
        </Container>
    );
}

export default ResultsPage;