import React from 'react';
import Heading from './heading.js';
//import { Section } from 'react-fullpage';

class About extends React.Component
{
    render()
    {
        return (
            <div className="about content-card dark">
                <div>
                    <Heading text="about_me" dark="true" />
                </div>
                <div class="center img"></div>
                <p class="center">
                    I am a student at Potisarnpittayakorn School. I started coding when I was 10. Simple HTML page I had built on that day sparked my interest in the computer field. Since that day, I have been continuously educating myself.
                </p>
            </div>
        );
    }
}

export default About;