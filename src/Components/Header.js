import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Grid from "@material-ui/core/Grid"

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    // const name = this.props.data.name;
    // const description = this.props.data.description;

    return (
      <header id="home">
        <div id="overlay" ></div>
        <div id="bgground" ></div>
        <ParticlesBg type="custom" bg={true} />

         

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>



          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home"><img alt="Harry Ji Logo" className='logo' src="images/logo-white.png"></img>
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade top>
              <h1 className="responsive-headline">Hi, I'm Harry</h1>
            </Fade>
            <Fade bottom duration={1200}>
               <h3 class="subtitle">Certified IT professional with 10+ years keep upgrading skills and experience at Full-stack Development.</h3> 
            </Fade>           
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
