import React, { Component } from "react";
import "./Posts.css";

class Posts extends Component {


  render() {
     const post = this.props.input;
        return (
        
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">#{post.id}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <blockquote className="blockquote mb-0">
                  <p >
                    {post.body.substr(0,50) + '...'}
                  </p>
                  </blockquote>
                 
                  <button onClick={()=>this.props.clicked()} className="btn btn-info">
                    More Details
                  </button>
                </div>
              </div>
              
            </div>
          );
     
         
  }
}

export default Posts;
