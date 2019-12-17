import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';
//import { Section } from 'react-fullpage';

class About extends React.Component
{
    render()
    {
        return (
            <div className="about content-card dark">
                <div>
                    <Fade>
                        <Heading text="about_me" dark="true" />
                    </Fade>
                </div>
                <div class="dat">
                    sadkdhsidhsad
                </div>
            </div>
        );
    }
}

export default About;