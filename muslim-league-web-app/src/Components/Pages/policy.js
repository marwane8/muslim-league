import { Component } from "react";
import { Container } from 'react-bootstrap';

import policy from '../../Assets/documents/POLICY.pdf';
import rules from '../../Assets/documents/RULES.pdf';

class Policy extends Component{
    render(){
        return(
          <Container fluid="xl">
           <h2 className="title"> Muslim League Policy and Rules </h2>
           <p>
            The following league Policy and Rules are implemented for team registration and all offical games.
           </p>
           <p><a className="button" href={policy}>POLICY</a></p>
           <p><a className="button" href={rules}>RULES</a></p>
           
          </Container>
        )
    }
}

export default Policy;