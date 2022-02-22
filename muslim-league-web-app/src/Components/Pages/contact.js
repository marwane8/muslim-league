import { Component } from "react";
import { Container } from 'react-bootstrap';


class Contact extends Component{
    render(){
        return(
          <Container fluid="xl">
           <h2 className="title"> Contact Us </h2>
           <h5 style={{marginBottom: 5}}>Vale Sports Club</h5>
           <p  style={{marginBottom: 25}}>1280 Newfield St, Middletown, CT 06457</p>
           <p style={{marginBottom: 5}}>
            For any questions or concerns, please reach out to our email at:
           </p>
           <h6>muslimleaguect@gmail.com</h6>
          </Container>
        )
    }
}


export default Contact;