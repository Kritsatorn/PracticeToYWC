import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {

  return(
    <div>
      <Header />
      <div className="container col-md-8 text-center">
        <h1 className="mt-5">404</h1>
        <h2 className="mb-4">Not Found</h2>
        <p> We're Fucked up</p>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound;