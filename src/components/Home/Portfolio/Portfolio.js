import React, {Component} from 'react';
import './Portfolio.css';

 class Portfolio extends Component{
     render(){
         return (
            <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
                
                <div>
                    <img src={ require('../../../assets/images/Portfolio/portfolio-img1.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
               
                     <img src={ require('../../../assets/images/Portfolio//portfolio-img2.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio//portfolio-img3.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio/portfolio-img4.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio/portfolio-img5.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio/portfolio-img6.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio/portfolio-img7.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                <img src={ require('../../../assets/images/Portfolio/portfolio-img8.jpg') } alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
            </div>
            
        </div>
        
        
         );
     }
 }
 export default Portfolio