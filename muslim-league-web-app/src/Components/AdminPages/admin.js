import Container from 'react-bootstrap/Container'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Admin extends Component{
    render(){
        return(
           <Container>
           <h2 className="title"> Muslim League CT </h2>
           <h5> Admin Functions</h5>

           <Button variant="primary" href="/addGames" style={{marginRight: 5}}> Input Game Stats</Button>
           <Button variant="primary" href="/addTeams" style={{marginRight: 5}}> Add Team </Button>

           </Container>
        )
    }
}

export default Admin;