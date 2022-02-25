import React, { Component } from 'react';
import {getSchedule} from '../../APIUtils';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import '../../Assets/Schedule.css'

class Schedule extends Component{
    render(){
        return(
           <div>
           <h2 className="title"> 2021 Summer League Schedule </h2>
            <WeeklyGames/>
           </div> 
        )
    }
}

class WeeklyGames extends React.Component{
    state = {
        loading: true,
        items: []
    };

    async componentDidMount(){
        getSchedule()
            .then(response => response.json()
                .then(json => { 
                    this.setState({
                        items: json,
                        loading: false })}))
            .catch(error => console.error(error));

    };


    render(){
            var { items } = this.state;
            if (this.state.loading){
                return(<div>loading...</div>)
            }
            
            return(
                
                <div>
                <Container className = "week-container">
                <h3 className="bg-dark text-white text-center" > Weekly Games </h3>
                <Row>
                    <Col className="games">
                        {items.map( (item,i) => (
                            <Card className="games-list spacing" key={item.game_id}>
                                    <Card.Header as="h5"> GAME {i + 1} </Card.Header>
                                    <Card.Body>
                                        <Card.Text as="h6">
                                            {item.team1} vs {item.team2}
                                        </Card.Text>
                                        <div>{item.date} <br/> {item.start}</div>
                                        <div>{item.court}</div> 
                                    </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
                </Container>
                </div>
            )
    }
}

export { Schedule,WeeklyGames };