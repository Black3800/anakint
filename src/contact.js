import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact content-card">
                <div>
                    <Heading text="contact" />
                </div>
                <div>fb.me/anakin.thanainantha</div>
            </div>
        );
    }
}

export default Contact;