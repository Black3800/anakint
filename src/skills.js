import React from 'react';
//import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills content-card">
                <div>
                    <Heading text="skills" />
                </div>
                <div className="textbox">
                    <ul>
                        <li>
                            <span>Coding:</span> C, C++, Java, Python, HTML, JavaScript, CSS, jQuery, PHP, MySQL, React.js, Arduino, Assembly
                        </li>
                        <li>
                            <span>Cybersecurity:</span> Web App Penetration Testing, Cryptography, Packet Analyzing, Reverse Engineering
                        </li>
                        <li>
                            <span>Graphics:</span> Photoshop, Illustrator, Lightroom, Maya, Cinema4D, Adobe Premiere Pro, After Effects, Vegas
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skills;