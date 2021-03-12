import React from 'react';
import { Jumbotron } from 'reactstrap';
import recording from './cse_455_final_project.mp4';

const VideoPage = () => {
    return (
        <Jumbotron className="jumbotronWrapper">
            <video height="600" width="1000" controls>
                <source src={recording} type="video/mp4" />
            </video>
        </Jumbotron>
    );
}

export default VideoPage;