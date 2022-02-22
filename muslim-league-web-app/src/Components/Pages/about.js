import Container from 'react-bootstrap/Container'
import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
           <div className="about"> 
           <h2 className="title"> Muslim League CT </h2>
           <Container>
           <p>
            Muslim League CT is an inturmural basketball league for Muslims in Connecticut.
            Founded in 2020, Muslim League CT is devoted to giving the community a chance to gather as brothers and play basketball as a means to stay united.
            Our main objective is to fulfill the need of organized athletics for local muslims.
           </p>
           </Container>
           </div> 
        )
    }
}

export default About;