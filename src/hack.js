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
                <div>
                    Haxed by anakin
                </div>
            </div>
        );
    }
}

export default Hack;