import React from 'react';
import ReactDOM from 'react-dom';
//import ReactFullpage from '@fullpage/react-fullpage';
import { SectionsContainer, Section } from 'react-fullpage';
import './index.css';
import Banner from './banner.js';
import About from './about.js';
import Code from './code.js';
import Design from './design.js';
import Hack from './hack.js';
import Music from './music.js';
import Skills from './skills.js';
import Achievements from './achievements.js';
import Interests from './interests.js';
import Contact from './contact.js';

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

        let options = {
            sectionClassName:       'section',
            activeClass:            'active',
            anchors:                ['anakint', 'aboutme', 'aboutme2'],
            scrollBar:              false,
            navigation:             true,
            verticalAlign:          false,
            sectionPaddingTop:      '0px',
            sectionPaddingBottom:   '0px',
            arrowNavigation:        true,
            delay:                  1000
        };

        return (
            <SectionsContainer id="App" class="App" ref={this.myRef} /*onScroll={this.onScroll}*/ {...options}>
                <Section>
                    <Banner />
                </Section>
                <Section>
                    <About />
                </Section>
                <Section>
                    <Code />
                </Section>
            </SectionsContainer>
        );

                /*<Code />
                <Design />
                <Hack />
                <Music />
                <Skills />
                <Achievements />
                <Interests />
                <Contact />*/
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));