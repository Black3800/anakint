import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills content-card dark">
                <div>
                    <Heading text="skills" dark="true" />
                </div>
                <p>
                    Coding: C, C++, Java, Python, HTML, JavaScript, CSS, jQuery, PHP, MySQL, React.js, Arduino, Assembly
                    <br />
                    Cybersecurity: Web App Penetration Testing, Cryptography, Packet Analyzing, Reverse Engineering
                    <br />
                    Graphics: Photoshop, Illustrator, Lightroom, Maya, Cinema4D, Adobe Premiere Pro, After Effects, Vegas
                </p>
            </div>
        );
    }
}

export default Skills;