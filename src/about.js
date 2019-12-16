import React from 'react';
import Fade from 'react-reveal/Fade';
//import { Section } from 'react-fullpage';

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
            <div className="about content-card">
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