import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Design extends React.Component {
    render() {
        return (
            <div className="design content-card">
                <div>
                    <Heading text="i_design" />
                </div>
                <img srcSet="design@0,25x.jpg,
                             design@0,5x.jpg 1.5x,
                             design@0,75x.jpg 2x,
                             design.jpg 2.5x" src="design.jpg" />
                <div className="textbox">
                    <h2>For me, arts are like colors of life</h2>
                    I do graphic designs, movie editing, and sometimes traditional art. Many has appreciated works that are made out of my creativity.
                </div>
            </div>
        );
    }
}

export default Design;