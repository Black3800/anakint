import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Design extends React.Component {
    render() {
        return (
            <div className="design content-card">
                <div>
                    <Fade>
                        <Heading text="i_design" />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Design;