import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import FadeIn from 'react-fade-in';
import Virus from '../img/virus.png';
import './Home.css';

// Home page component (Landing page)
const HomePage = () => {

    return (
        <div>
            <Jumbotron className="jumbotronWrapper">
                <FadeIn transitionDuration="1300" delay="60">
                    <h1 className="headerStyle mainTitle"> MaskCV <img alt="" style={{marginBottom: '80px', marginLeft: '-25px'}} src={Virus} height="100" width="100" /></h1>
                    <h3 className="bodyStyle quoteText">"Wear a mask." - Dr. Anthony Fauci </h3>
                    <Button className="moreButton" href="#/About" size="lg" outline color="info">
                        Explore
                    </Button>
                    <p className="bodyStyle addedText">Final project for CSE 455 taught by Joseph Redmon</p>
                </FadeIn>
            </Jumbotron>
        </div>
    );
}

export default HomePage;