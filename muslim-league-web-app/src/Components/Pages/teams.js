import React, { Component } from 'react';
import { getAllTeams } from '../../APIUtils';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { Button,ButtonGroup, Container } from 'react-bootstrap';
import '../../Assets/Teams.css';
class Teams extends Component{
    render(){
        return(
           <div>
               <h2 className="title"> 2021 Muslim League Roster </h2>
               <TeamsTab/>
           </div> 
        )
    }
}

class TeamsTab extends Component{
    state = {
        loading: true,
        season: [],
        players: [],
    };
    async componentDidMount(){

        getAllTeams()
            .then(response => response.json()
                .then(json => { 
                    this.setState({
                        season: json,
                        players: json[0].players,
                        loading: false })}))
            .catch(error => console.error(error));
        
    }

    changeTeams(index) {
        let season = this.state.season
        this.setState({
            players: season[index].players
        });
    }

    render(){
        var { season,players } = this.state;
        if (this.state.loading){
            return(
            <div> loading....</div>
            )
        };
        return(
            <Container>
                <Row>
                    <Col sm={4}>
                        <ButtonGroup vertical>
                            {season.map((team,i)=> (
                                <Button 
                                    key={team.id}
                                    size="lg"
                                    className="team-button"
                                    onClick={()=>this.changeTeams(i)}>
                                        {team.teamName}
                                    </Button>
                            ))}
                        </ButtonGroup>
                    </Col>

                    <Col sm={8}>
                        <Table bordered hover>
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col" >Name</th>
                                <th scope="col" >POS</th>
                                <th scope="col" >No.</th>
                            </tr>
                            </thead>
                            <tbody>
                                {players.map(player =>(
                                    <tr key={player.id}>
                                    <td> {player.playerName} </td>
                                    <td> {player.playerPos} </td>
                                    <td> {player.playerNumber} </td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Teams;