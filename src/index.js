import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './banner.js';
import About from './about.js';

class App extends React.Component
{
    componentDidMount()
    {
        document.title = "Anakin Thanainantha";
    }

    render()
    {
        return(
            <div class="App">
                <Banner />
                <About />
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));