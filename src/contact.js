import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact content-card">
                <div>
                    <Fade>
                        <Heading text="contact" />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Contact;