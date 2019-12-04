import React from 'react';
import Zoom from 'react-reveal/Zoom';

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
        <div className={this.props.cs}>{this.props.text}</div>
        );
    }
}

class About extends React.Component
{
    render()
    {
        return (
            <div className="about">
                <Zoom style="justify-self: center; align-self: center">
                    <Heading text="about_me" cs="heading fadeIn" />
                </Zoom>
            </div>
        );
    }
}

export default About;