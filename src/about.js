import React from 'react';
import Fade from 'react-reveal/Fade';

class Heading extends React.Component
{
    constructor(props)
    {
        super(props);
        this.ref = React.createRef();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(
        <div className="heading">{this.props.text}</div>
        );
    }
}

class About extends React.Component
{
    render()
    {
        return (
            <div className="about">
                <div>
                    <Fade>
                        <Heading text="about_me" />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default About;