import React, { Component } from 'react';
import '../../Assets/App.css'

import prayer from '../../Assets/images/prayer.png'
import winners from '../../Assets/images/topakhs.png'
import mvp from '../../Assets/images/mvp.png'
import scorer from '../../Assets/images/scorer.png'
import trophy from '../../Assets/images/trophy.png'


import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import { CardGroup } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
          <Container fluid="xl">
            <Billboard/>
            <Welcome/>
            <Season/>
            <Announcements/>
          </Container>
        )
    }
}
function Billboard(props){
    return(
        <div style={{marginTop: 60, marginBottom: 10 }}>
            <Carousel variant="dark" style={{overflow: 'hidden'}}>
            <Carousel.Item className="home-carousel">
              <img className="w-100 h-auto" src={prayer} alt="Group Praying"/>
              <Carousel.Caption>
                <h1 className="carousel-text">The Muslim League</h1>
                <h3 className="carousel-text"> Uniting muslim athletes across CT</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="home-carousel">
              <img className="d-block w-100 h-auto" src={winners} alt="Champions"/>
              <Carousel.Caption>
                <h1 className="carousel-text">Top Akhs: 2021 Champions </h1>
                <h5 className="carousel-text">Top Akhs overcome The Young Sahabs in a close battle winning 60 to 58 </h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

function Welcome(props){
    return(

        <Card className="spacing">
          <Card.Header as="h5">Assalaamu Alaikum!</Card.Header>
          <Card.Body>
              <Card.Text>
              Welcome to the CT Muslim League.
              We are a muslim sports foundation, and our mission is to unite
              muslim communities through organizing competitive sports leagues.
              </Card.Text>
          </Card.Body>
        </Card>
    
    )
}

function Season(props){
  return(
    <Card className="spacing">
    <Card.Header className="spacing" as="h5">2021 Season Recap</Card.Header>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src={mvp} alt="Kyle holding award"/>
      <Card.Body>
        <Card.Title>2021 MVP</Card.Title>
        <Card.Title>Kyle Walker</Card.Title>
        <Card.Text>
          Kyle Walker awarded as MVP of the 2021 Muslim League.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">August 2021</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={trophy} />
      <Card.Body>
        <Card.Title>2021 Stats</Card.Title>
        <Card.Text>
          Vist the Stats and Awards page for a detailed reacap of the 2021 Season.
        </Card.Text>
        <Button variant="primary" href="/Stats" style={{marginRight: 5}}>Stats </Button>
        <Button variant="warning" href="/Awards" style={{marginLeft: 5}}>Awards</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">August 2021</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={scorer} alt="Azeem holding award" />
      <Card.Body>
      <Card.Title>2021 Scoring Leader</Card.Title>
      <Card.Title>Azeem Indawala</Card.Title>
        <Card.Text>
          Azeem Indawala lead the Muslim League in scoring this year averaging 15.1 points a game.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">August 2021</small>
      </Card.Footer>
    </Card>
  </CardDeck>
    </Card>
  )
}

function Announcements(props){
  return(
    <Card className="spacing">
    <Card.Header as="h5">League Announcements </Card.Header>
    <CardGroup>
    <Card>
          <Card.Title style={{marginTop: 12, marginBottom: 0}}>Thank you for your Support</Card.Title>
          <Card.Body>
              <Card.Text>
                The Muslim League would like to thank all of you for your conitnued support.
                We look forwarding to serving the community for many years to come.
              </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Title style={{marginTop: 12, marginBottom: 0}}>Summer 2022 Season Coming Soon!</Card.Title>
          <Card.Body>
              <Card.Text>
                Details for 2022 Summer registiration will roll out early next year.
                Please be sure to check back here and on our social media pages for league updates.
              </Card.Text>
          </Card.Body>
        </Card>
  </CardGroup>
    </Card>
  )
}

export default Home;