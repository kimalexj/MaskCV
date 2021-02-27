import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Raw picture images
import img_one from '../img/sample_raw/mask46.png';
import img_two from '../img/sample_raw/mask91.png';
import img_three from '../img/sample_raw/mask94.png';

const ResultsPage = () => {
    const images = [img_one, img_two, img_three]; // update this for more images
    const [activeTab, setActiveTab] = useState('1');

    const carouselImages = (
        images.map(img => {
            return (
                <div>
                    <img src={img} alt="raw_mask_image"/>
                </div>
            )
        })
    )

    return (
        <Container>
            <Row>
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
                        <TabPane tabId="2">Tab 2 Content</TabPane>
                        <TabPane tabId="3">Tab 3 Content</TabPane>
                        <TabPane tabId="4">Tab 4 Content</TabPane>
                </TabContent>
                </div>
            </Row>
            <Row>
                <Carousel>
                    {carouselImages}
                </Carousel>
            </Row>
        </Container>
    );
}

export default ResultsPage;