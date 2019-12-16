import React from 'react';
import Fade from 'react-reveal/Fade';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="heading">{this.props.text}</div>
        );
    }
}

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