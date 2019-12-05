import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './banner.js';
import About from './about.js';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            scrollTop: 0
        };
        this.myRef = React.createRef();
        //this.handleScroll = this.handleScroll.bind(this);
    }

    /*handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollTop = this.myRef.current.scrollTop;
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        this.setState({
            scrollTop: scrollTop
        })
        //console.log(e);
    }*/

    componentDidMount()
    {
        
    }

    render()
    {
        //const { scrollTop } = this.state;
        return(
            <div class="App" ref={this.myRef} /*onScroll={this.onScroll}*/>
                <Banner />
                <About />
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));