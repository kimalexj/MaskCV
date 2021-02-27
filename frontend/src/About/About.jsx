import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col } from 'reactstrap';

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
                <TabPane tabId="2">Tab 2 Content</TabPane>
                <TabPane tabId="3">Tab 3 Content</TabPane>
                <TabPane tabId="4">Tab 4 Content</TabPane>
          </TabContent>
        </div>
    );
}

export default AboutPage;