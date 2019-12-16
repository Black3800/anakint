import React from 'react';
import { Section } from 'react-fullpage';

let fulltext = 'thanainantha';
let count = 1;

class Surname extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: 't',
            interval: 0,
            mounted: false
        };
        this.playAnimation = this.playAnimation.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    playAnimation()
    {
        //console.log("played" + count);
        this.setState({
            text: this.state.text + fulltext[count++]
        });
        if (count === fulltext.length)
        {
            this.props.onAnimationFinish();    
        }
    }

    componentDidMount()
    {
        //console.log(this.state.mounted)
        for(let i=1; i<fulltext.length; i++)
        {
            setTimeout(this.playAnimation, 2000 + 150 * i);
        }
    }

    render()
    {
        if(this.props.expand)
        {
            return(
                <div className="sur expand">{this.state.text}</div>
            );
        }
        else
        {
            return(
                <div className="sur">{this.state.text}</div>
            );
        }
    }
}

class Arrow extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const animate = (this.props.animationFinish) ? "arrow-container ghosting" : "arrow-container";
        return (
            <a href="#aboutme" className={animate}>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </a>
        );
    }
}

class Banner extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            expand: false,
            animationFinish: false
        };
        this.playAnimation = this.playAnimation.bind(this);
        this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
    }

    componentDidMount()
    {
        /*console.log("animatjon started");
        console.log(fulltext);*/
        setTimeout(this.playAnimation, 1000);
    }
    
    playAnimation()
    {
        //console.log(this);
        this.setState({
            expand: true
        });
    }

    handleAnimationFinish()
    {
        this.setState({
            animationFinish: true
        });
        //console.log("done");
    }

    render()
    {
        return(
            <div className="banner content-card">
                <div className="hero">
                    <div className="first">anakin</div>
                    <Surname expand={this.state.expand} onAnimationFinish={this.handleAnimationFinish}/>
                </div>
                <Arrow animationFinish={this.state.animationFinish}/>
            </div>
        );
    }
}

export default Banner;