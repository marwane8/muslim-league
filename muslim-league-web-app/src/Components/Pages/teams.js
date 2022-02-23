import React, { Component } from 'react';
import {getTeams} from '../../APIUtils';

import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

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
        team1: [],
        team2: [],
        team3: [],
        team4: [],
    };
    async componentDidMount(){
        const team1 = await getTeams('1');
        const team2 = await getTeams('2');
        const team3 = await getTeams('5');
        const team4 = await getTeams('6');

        console.log(team1)
        this.setState({ 
            loading: false,
            team1: team1,
            team2: team2,
            team3: team3,
            team4: team4,
        });
    }

    render(){
        if (this.state.loading){
            return(
            <div> loading....</div>
            )
        };
        return(
            <Tab.Container defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>

                    <ListGroup.Item action href="#link1">
                    {this.state.team1[0].team_name}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link2">
                    {this.state.team2[0].team_name}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link3">
                    {this.state.team3[0].team_name}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link4">
                    {this.state.team4[0].team_name}
                    </ListGroup.Item>

                </ListGroup>
                </Col>


                <Col sm={8}>
                <Tab.Content>

                    <Tab.Pane eventKey="#link1">
                    <Table bordered hover>
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col" >Name</th>
                        <th scope="col" >POS</th>
                        <th scope="col" >No.</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.team1.map(team =>(
                            <tr key={team.id}>
                            <td> {team.player_name} </td>
                            <td> {team.player_pos} </td>
                            <td> {team.player_number} </td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link2">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team2.map(team =>(
                                <tr key={team.id}>
                                <td> {team.player_name} </td>
                                <td> {team.player_pos} </td>
                                <td> {team.player_number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link3">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team3.map(team =>(
                                <tr key={team.id}>
                                <td> {team.player_name} </td>
                                <td> {team.player_pos} </td>
                                <td> {team.player_number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link4">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team4.map(team =>(
                                <tr key={team.id}>
                                <td> {team.player_name} </td>
                                <td> {team.player_pos} </td>
                                <td> {team.player_number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                </Tab.Content>


                </Col>
            </Row>
            </Tab.Container>
        )
    }
}

export default Teams;