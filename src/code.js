import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from './heading.js';

class Code extends React.Component {
    render() {
        return (
            <div className="code content-card">
                <div>
                    <Fade>
                        <Heading text="i_code" />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Code;