import React, { Component } from "react";
import './App.css';
import ParticlesBg  from "particles-bg";
export class Header extends Component {
  render() {
     return (
       <header id="header">
        
        <div className="intro">
        <ParticlesBg type="cobweb" color="#0575E6" num={200}  bg={true} />
      
          <div className="overlay">
            <div className="container">
              <div className="row">
                
                <div className="col-md-8 col-md-offset-2 intro-text">
                <img src="../img/logo.png" alt="logo" style={{height: '90px'}}/><br/><br/>
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1> 
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
    );
  }
}

export default Header;
