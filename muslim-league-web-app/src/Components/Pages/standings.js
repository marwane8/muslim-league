import React, { Component } from 'react';
import {getStandings} from '../../APIUtils';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';

class Standings extends Component{
    render(){
        return(
          <Container fluid="xl">
               <h2 className="title"> 2021 Standings </h2>
               <StandingsTable/>
          </Container>
        )
    }
}

class StandingsTable extends Component{
    state = {
      loading: true,
      teams: []
    }

    async componentDidMount(){
      
      getStandings()
        .then(response => response.json()
            .then(json => { 
                this.setState({
                    teams: json,
                    loading: false })}))
        .catch(error => console.error(error));

    }
    
    render(){
      if (this.state.loading){
          return(<div>loading....!</div>)
      }

        return(
        <Table bordered hover>
            <thead className="thead-dark">
      <tr>
        <th scope="col"> </th>
        <th id ="teamName" scope="col"> Team </th>
        <th scope="col"> W </th>
        <th scope="col"> L </th>
        <th id="diff" scope="col"> PF </th>
        <th id="diff" scope="col"> PA </th>
        <th id="diff" scope="col"> +/- </th>
      </tr>
    </thead>
    <tbody>
      {this.state.teams.map((team,i) =>(
              <tr key={team.id}>
              <th scope="row">{i+1}</th>
              <td> {team.teamName} </td>
              <td> {team.wins} </td>
              <td> {team.losses} </td>
              <td> {team.pointsFor} </td>
              <td> {team.pointsAgainst} </td>
              <td> {team.pointsFor - team.pointsAgainst} </td>
            </tr>
      ))}

    </tbody>
      </Table>
    )
    }
}

export default Standings;