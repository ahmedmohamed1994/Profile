import React, { Component } from "react";
import Posts from "./Posts/Posts";
import "./Blog.css";
import axios from '../../axios';
import history from './../../history'

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts:[],
  }
}

    componentDidMount(){

        this.getPosts();  
    }
    getPosts(){
        axios.get('posts').then(response=>{
           
            const posts = response.data.slice(0,10);
            const updatedPosts = posts.map(post=>{
                return {
                     ...post,
                    author:'Ahmed Hussein'
                }  
        })
        this.setState({posts:updatedPosts});
        })
        .catch(error=>{
            console.warn(error)
        })
    }
    goToFullPost(id){
     history.push('/blog/posts/'+id);
     window.location.reload(); 

    }
  render() {

     if(this.state.posts.length === 0){
        return <h1 className="text-center">loading ...</h1>
     }else{
        var posts = this.state.posts.map((post,index)=>{
            return <Posts key={index} input={post} clicked={()=>this.goToFullPost(post.id)}/>
          })
     }
     
    return (
       
      <div className="container ">
         
        <div className="row margin-top">{posts}</div>
      </div>
    );
  }
}

export default Blog;
