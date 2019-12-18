import React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

    }

    render() {
        let headingClass = (this.props.dark == "true") ? "heading dark" : "heading";
        return (
            <h1 className={headingClass}>{this.props.text}</h1>
        );
    }
}

export default Heading;