import React, { useState } from 'react';
import { Chart } from 'react-charts'
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, } from 'reactstrap';
import Gallery from 'react-grid-gallery';

import './Results.css';

// Raw picture images
import img_one from '../img/sample_raw/mask46.png';
import img_two from '../img/sample_raw/mask91.png';
import img_three from '../img/sample_raw/mask94.png';
import img_four from '../img/sample_raw/mask492.png';

// Test graph
import test_graph from '../img/testgraph.png';

const images = [
    {
        src: img_one,
        thumbnail: img_one,
        thumbnailWidth: 400,
        thumbnailHeight: 226
    },
    {
        src: img_two,
        thumbnail: img_two,
        thumbnailWidth: 400,
        thumbnailHeight: 225
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
        thumbnailWidth: 301,
        thumbnailHeight: 400
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
                            images={images}
                        />
                    </Col>
                </Row>
            </div>
            
        </Container>
    );
}

export default ResultsPage;