import React, {Component} from 'react';
import './PostDetails.css';
import axios from '../../../axios';
class PostDetails extends Component {

    state = {
        fullPost:{}
    }

    componentDidMount(){
        axios.get(`posts/${this.props.match.params.id}`).then((response)=>{
            this.setState({fullPost:response.data});
        })
    }
    getAllPosts(){
         this.props.history.push('/blog');
    }
    render(){
        const post = this.state.fullPost;
        return (
          <div className="container">
            <div className=" margin-top">
              <div className="card ">
                <div className="card-header">#{post.id}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                  {post.body}
                  </p>
                  <button className="btn btn-danger" onClick={()=>this.getAllPosts()} >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PostDetails