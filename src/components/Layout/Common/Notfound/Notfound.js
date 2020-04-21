import React from 'react';
import './Notfound.css'

const notFound = (props)=>{
   const goHome =()=> {
        props.history.push('/');
    }
    return (

        <div className="home">
        <div className="container">
            <div className="home-information">
                <h2 className="home-title margin-bottom">404</h2>
                <h4 className="home-info">Page Not Found</h4>
                <p className="home-desc">
                    Iam a professional <span>Software Developer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </p>
                
                <button onClick={()=>goHome()} className="home-btn">Go Home</button>
            </div>
        </div>
    </div>
    );
}
export default notFound