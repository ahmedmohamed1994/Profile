import React, {Component} from 'react';
import Intro from './Intro/Intro';
import Work from './Work/Work';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import About from './About/About';
import Contact from './Contact/Contact';
import Social from './Social/Social';

class Home extends Component{
    render(){
        return(
            <div>
                <Intro />
                <Work />
                <Portfolio />
                <Skills />
                <About />
                <Social />
                <Contact />
            </div>
        );
    }
}

export default Home;