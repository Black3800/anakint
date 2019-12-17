import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Code extends React.Component {
    render() {
        return (
            <div className="code content-card">
                <div>
                    <Heading text="i_code" />
                </div>
                <img srcSet="code@0,25x.jpg,
                             code@0,5x.jpg 1.5x,
                             code@0,75x.jpg 2x,
                             code.jpg 2.5x" src="code.jpg" />
                <div className="textbox">
                    <h2>What made you enjoy coding?</h2>
                    Mine is the feeling that I could build the whole world up with my own keystrokes, my codes, and my passion.
                </div>
            </div>
        );
    }
}

export default Code;