import { Component } from "react";
import {Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import mvp from '../../Assets/images/mvp.png';
import scorer from '../../Assets/images/scorer.png';
import classAct from '../../Assets/images/class_act.jpg';
import dpoy from '../../Assets/images/dpoy.jpg';
import rebounder from '../../Assets/images/rebounder.jpg';

class Awards extends Component{
    render(){
        return(
          <Container fuild="m">
            <h2 className="title"> 2021 Summer League Awards </h2>
              <CardDeck className="spacing">
                <Card>
                  <Card.Img variant="top" src={mvp} alt="Kyle holding award"/>
                  <Card.Body>
                    <Card.Title>2021 MVP</Card.Title>
                    <Card.Title>Kyle Walker</Card.Title>
                    <Card.Text>
                      Top Akhs
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">2021 Summer League</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={scorer} alt="Azeem holding award" />
                  <Card.Body>
                  <Card.Title>2021 Scoring Leader</Card.Title>
                  <Card.Title>Azeem Indawala</Card.Title>
                    <Card.Text>
                    The Akatsuki
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">2021 Summer League</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
              <CardDeck className="spacing">
                <Card>
                  <Card.Img variant="top" src={dpoy} />
                  <Card.Body>
                    <Card.Title>2021 Defensive Player of the Year</Card.Title>
                    <Card.Title>Ibrahim Jibrell</Card.Title>
                    <Card.Text>
                      Young Sahabs
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">2021 Summer League</small>
                  </Card.Footer>
                </Card>

                <Card>
                  <Card.Img variant="top" src={rebounder} />
                  <Card.Body>
                    <Card.Title>2021 Rebounding Leader </Card.Title>
                    <Card.Title>Ahmed Kabar</Card.Title>
                    <Card.Text>
                    Young Sahabs
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">2021 Summer League</small>
                  </Card.Footer>
                </Card>
                </CardDeck>

                <Card id="last-card">
                  <Card.Img variant="top" src={classAct} />
                  <Card.Body>
                    <Card.Title>2021 Class Act</Card.Title>
                    <Card.Title>Kamrul Hussain</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">2021 Summer League</small>
                  </Card.Footer>
                </Card>

          </Container>
        )
    }
}


export default Awards;


