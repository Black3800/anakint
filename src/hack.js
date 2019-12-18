import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Hack extends React.Component {
    render() {
        return (
            <div className="hack content-card dark">
                <div>
                    <Heading text="i_hack" dark="true"/>
                </div>
                <img srcSet="hack@0,25x.jpg,
                             hack@0,5x.jpg 1.5x,
                             hack@0,75x.jpg 2x,
                             hack.jpg 2.5x" src="hack.jpg" alt="Picture or me standing on my back" />
                <div className="textbox">
                    <h2>Hacking has always been my enthusiasm</h2>
                    I do it legally though.
                </div>
            </div>
        );
    }
}

export default Hack;