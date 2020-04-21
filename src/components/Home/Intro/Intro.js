import React, {Component} from 'react';
import './Intro.css';
 class Intro extends Component{
     render(){
         return (
            <div className="home">
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Ahmed Hussein</h2>
                    <h4 className="home-info">Creative Director</h4>
                    <p className="home-desc">
                        Iam a professional <span>Software Developer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </p>
                    <button className="home-btn">Let's Begin</button>
                </div>
            </div>
        </div>
         );
     }
 }
 export default Intro