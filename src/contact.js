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
                <div className="textbox">Interested in me? Let's have a talk</div>
                <div className="links">
                    <a className="fb" href="https://fb.me/anakin.thanainantha"></a>
                    <a className="mail" href="mailto: thanainantha.anakin@gmail.com"></a>
                </div>
            </div>
        );
    }
}

export default Contact;