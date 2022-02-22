import React, { Component } from 'react';
import Table from 'react-bootstrap/esm/Table';
import {getLeaders} from '../../APIUtils';

import '../../Assets/Stats.css'

class Stats extends Component{
    render(){
        return(
           <div>
           <h2 className="title"> 2021 Summer League Leaders </h2>
            <StatsTable/>
           </div> 
        )
    }
}

class StatsTable extends Component{
    state = {
        loading: true,
        points: [],
        rebounds: [],
    };
    async componentDidMount(){

        getLeaders('points')
            .then(response => response.json()
                .then(json => { 
                    this.setState({
                        points: json})}))
            .catch(error => console.error(error));

        getLeaders('rebounds')
            .then(response => response.json()
                .then(json => { 
                    this.setState({
                        rebounds: json})}))
            .catch(error => console.error(error));
        
        this.setState({ loading: false });
    }

    render(){
            if (this.state.loading){
                return(
                <div> loading..</div>
                )
            };

            return(
                <div className="stat-page">
                <Table striped bordered hover className="stat-table">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2" as="h5"> TOP 5 - POINTS LEADERS </th>
                        </tr>
                        <tr>
                        <th>PLAYER</th>
                        <th>POINTS (TOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.points.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.points}</td>
                    </tr>
                    ))} 
                    </tbody>
                </Table>

                <Table striped bordered hover className="stat-table">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2"> TOP 5 - REBOUND LEADERS </th>
                        </tr>
                        <tr>
                        <th>PLAYER</th>
                        <th>REBOUNDS (TOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rebounds.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.rebounds}</td>
                    </tr>
                    ))} 
                    </tbody>
                </Table>
                </div>

            )
        }

}

export default Stats;