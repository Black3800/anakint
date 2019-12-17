import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills content-card">
                <div>
                    <Fade>
                        <Heading text="skills" dark="true" />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Skills;