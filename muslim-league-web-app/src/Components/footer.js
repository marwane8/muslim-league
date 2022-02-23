import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import fb from '../Assets/icons/fb.png';
import insta from '../Assets/icons/insta.png';
import logo from '../Assets/images/logo.png';

class Footer extends Component{
    render(){
        return(
            <footer className="py-5 bg-dark footer" style={{marginTop: 20}}>
              <Container fluid="xl">
              <ul className="footer-info">
                <li> <a href="/About"> ABOUT US </a> </li>
                <li>|</li>
                <li> <a href="/Policy"> POLICY </a> </li>
                <li>|</li>
                <li> <a href="/contact-us"> CONTACT US </a> </li>
              </ul>
              <h6> Follow Muslim League: </h6>
              <ul className="socials">
                <li>
                  <a href="https://www.facebook.com/MuslimLeagueCT">
                    <img src={fb} alt="facebook icon" height={35}/>
                  </a>
                </li>
                <li>
                <a href="https://www.instagram.com/muslimleaguect/">
                  <img src={insta} alt="instagram icon" height={35}/>
                  </a>
                </li>
              </ul>
              <p> Muslim League CT &copy; est. 2020</p>
              <p>muslimleaguect@gmail.com</p>
              <p><a href="/Admin"> Admin </a></p>
              <img id="footer-logo" alt="league logo" src={logo} height={150}/>
              </Container>
          </footer>
        );
    }
}

export default Footer;