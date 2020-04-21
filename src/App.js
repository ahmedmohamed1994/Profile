import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

class App extends Component {
  render(){
    return (
      <BrowserRouter >
      <div className="App">
        <Layout>
       
        <Routes />

        </Layout>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
