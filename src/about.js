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
                <div className="center img" alt="Picture of myself"></div>
                <p className="center">
                    I am a student at Poti&shy;sarn&shy;pit&shy;ta&shy;ya&shy;korn School. I started coding when I was 10. Simple HTML page I had built on that day sparked my interest in the computer field. Since that day, I have been con&shy;ti&shy;nuous&shy;ly educating myself.
                </p>
            </div>
        );
    }
}

export default About;