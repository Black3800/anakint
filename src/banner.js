import React from 'react';

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
    }

    componentDidMount()
    {
        //console.log(this.state.mounted)
        for(let i=1; i<fulltext.length; i++)
        {
            setTimeout(this.playAnimation, 2000 + 150*i);
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

class Banner extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            expand: false
        };
        this.playAnimation  = this.playAnimation.bind(this);
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

    render()
    {
        return(
            <div className="banner" onLoadedData={this.onLoad}>
                <div className="hero">
                    <div className="first">anakin</div>
                    <Surname expand={this.state.expand} />
                </div>
                <div className="desc">coming soon</div>
            </div>
        );
    }
}

export default Banner;