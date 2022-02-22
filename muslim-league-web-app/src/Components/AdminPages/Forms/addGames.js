import React, { Component } from 'react';
import { getSchedule,getTeams } from '../../../APIUtils';

import '../../../Assets/Forms.css'

import Container from 'react-bootstrap/Container'

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class addGames extends Component{
    render(){
        return(
           <div className="about"> 
           <h2 className="title"> Games Selection </h2>
           <Container>
           <p>
               Select a Game to Update
           </p>
           <Games/>
           </Container>
           </div> 
        )
    }
}

class Games extends React.Component{
    state = {
        loading: true,
        items: [],
        show: false,
        game: null
    }

    async componentDidMount(){
        getSchedule()
        .then(response => response.json()
            .then(json => { 
                this.setState({
                    items: json,
                    game: json[0],
                    loading: false })}))
        .catch(error => console.error(error));
    };

    getGameInfo(index){

        var gameInfo = this.state.items[index]
        this.setState({show: true});
        this.setState({game: gameInfo});
    };


    render(){
        var { items } = this.state;
            if (this.state.loading){
                return(<div>loading...</div>)
            }

            const handleClose = () => this.setState({show: false});
            return(
                <div>
                    <Table bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th id ="teamName" scope="col"> Game </th>
                                <th scope="col"> Home </th>
                                <th scope="col"> Away </th>
                                <th id="diff" scope="col"> Date </th>
                                <th id="diff" scope="col"> Court </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((game,i) => (
                                <tr key={game.game_id} onClick={() => {this.getGameInfo(i)}}>
                                    <td> Game {game.game_id}</td>
                                    <td> {game.team1} </td>
                                    <td> {game.team2} </td>
                                    <td> {game.date}  </td>
                                    <td> {game.court} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Modal
                      show={this.state.show}
                      size="lg"
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false} >
                      <Modal.Header closeButton>
                        <Modal.Title> Game {this.state.game.game_id} Summary </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                                <GameTabel
                                team1={this.state.game.team1_id}
                                team1Name={this.state.game.team1}
                                team2={this.state.game.team2_id}
                                team2Name={this.state.game.team2}
                                game={this.state.game.game_id}
                                close={handleClose}
                                />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>

            )
    }
}

class GameTabel extends Component{
    constructor(props){
        super(props);
        this.state = {
            team1: [],
            team2: [],
            stats1: [],
            stats2: [],
            loading: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        
        const team1 = await getTeams(this.props.team1);
        const team2 = await getTeams(this.props.team2);

        const stat_data1 = [];
        const stat_data2 = [];
        team1.map(player => (stat_data1.push([this.props.game,player.id,'','',''])));
        team2.map(player => (stat_data2.push([this.props.game,player.id,'','',''])));
        this.setState({
            loading: false,
            team1: team1,
            team2: team2,
            stats1: stat_data1,
            stats2: stat_data2
        });
    };

    handleChange(event,i,j,team){
        let stats;
        switch(team) {
            case 1:
                stats = this.state.stats1;
                break;
            case 2:
                stats = this.state.stats2;
                break;
            default:
                stats=[];  
        }

        stats[i][j] = event.target.value;
        if (isNaN(event.target.value)){
            alert("Please insert a number!");
            stats[i][j] = '';
        }

        switch(team) {
            case 1:
                this.setState({stats1: stats});
                break;
            case 2:
                this.setState({stats2: stats})
                break;
            default:
                stats=[];  
        }
    }
    handleSubmit(event){
        event.preventDefault();
        const data = [];
        const stats = this.state.stats1.concat(this.state.stats2);
        stats.map(player => (
            data.push(
                {
                    game: player[0],
                    player: player[1],
                    points: player[2],
                    rebounds: player[3],
                    fouls: player[4]
                }
            )
        ));

        // Uncomment insert once this is secure
        if(this.isValid(stats)){

            /*
            fetch('/api/stats/game_stats', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then( data => {
                console.log('Success: ', data);
                alert("Your Stats Have been Recorded!");
            })
            .catch((error) => { console.error('Error:' , error); });
            */
        } else {
            alert("Error: Please don't leave the tables empty!")
        }
        
    }

    isValid(stats){
        let size = stats[0].length;
        let hasValues = false;
        for (let i in stats){
            for(let j = 2; j < size; j++ ){
                if (stats[i][j]){
                    hasValues = true;
                }
            }
        }

        return hasValues;
    }

    render(){

        var { stats1, stats2, team1,team2 } = this.state;
        if (this.state.loading){
            return(<div>loading...</div>)
        }
        return (
            <Container style={{textAlign: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <Table bordered striped className="team-total">
                        <thead className="thead-dark">
                            <tr>
                                <th colSpan="4"> {this.props.team1Name} </th>
                            </tr>
                            <tr>
                                <th id ="playerName" scope="col"> Player </th>
                                <th scope="col"> PTS </th>
                                <th scope="col"> REB </th>
                                <th id="diff" scope="col"> PF </th>
                            </tr>
                        </thead>
                        <tbody>
                            {team1.map((player,i) => (
                                <tr key={player.id}>
                                    <td> {player.player_name} </td>
                                    <td> <input className="stat-values" value={stats1[i][2]} onChange={(e) => this.handleChange(e,i,2,1)} maxLength="3"/> </td>
                                    <td> <input className="stat-values" value={stats1[i][3]} onChange={(e) => this.handleChange(e,i,3,1)} maxLength="3"/> </td>
                                    <td> <input className="stat-values" value={stats1[i][4]} onChange={(e) => this.handleChange(e,i,4,1)} maxLength="3"/> </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Table bordered striped className="team-total">
                        <thead className="thead-dark">
                            <tr>
                                <th colSpan="4"> {this.props.team2Name} </th>
                            </tr>
                            <tr>
                                <th id ="playerName" scope="col"> Player </th>
                                <th scope="col"> PTS </th>
                                <th scope="col"> REB </th>
                                <th id="diff" scope="col"> PF </th>
                            </tr>
                        </thead>
                        <tbody>
                            {team2.map((player,i) => (
                                <tr key={player.id}>
                                    <td> {player.player_name} </td>
                                    <td> <input className="stat-values" value={stats2[i][2]} onChange={(e) => this.handleChange(e,i,2,2)} maxLength="3"/> </td>
                                    <td> <input className="stat-values" value={stats2[i][3]} onChange={(e) => this.handleChange(e,i,3,2)} maxLength="3"/> </td>
                                    <td> <input className="stat-values" value={stats2[i][4]} onChange={(e) => this.handleChange(e,i,4,2)} maxLength="3"/> </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <input className="submit" type="submit" value="Submit" onClick={this.props.close}/>
                </form>
            </Container>
        )
    }
}

export default addGames;