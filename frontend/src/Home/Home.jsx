import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Home.css';

// Home page component (Landing page)
const HomePage = () => {

    return (
        <div>
            <Jumbotron className="jumbotronWrapper">
                <h1 className="headerStyle mainTitle"> MaskCV </h1>
                <h3 className="bodyStyle quoteText">"Wear a mask." - Dr. Anthony Fauci</h3>
                <Button className="moreButton" href="#/About" size="lg" outline color="info">
                    Explore
                </Button>
                <p className="bodyStyle addedText">Final project for CSE 455 taught by Joseph Redmon</p>
            </Jumbotron>
        </div>
    );
}

export default HomePage;