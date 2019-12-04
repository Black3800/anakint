import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './banner.js';

function App() {
    return (
        <Banner />
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));