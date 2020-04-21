import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer'
 const layout = (props)=>(
    <Aux>
       <Header />
        <main>{props.children}</main>
        <Footer />

    </Aux>
 )
 export default layout;