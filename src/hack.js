import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Hack extends React.Component {
    render() {
        return (
            <div className="hack content-card">
                <div>
                    <Fade>
                        <Heading text="i_hack" dark="true"/>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Hack;