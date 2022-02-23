import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Components/header'

import Home from './Components/Pages/home'
import About from './Components/Pages/about'
import { Schedule } from './Components/Pages/schedule';
import Stats from './Components/Pages/stats';
import Standings from './Components/Pages/standings';
import Teams from './Components/Pages/teams';
import Awards from './Components/Pages/awards';
import Policy from './Components/Pages/policy';
import Contact from './Components/Pages/contact';

import Admin from './Components/AdminPages/admin';
import addGames from './Components/AdminPages/Forms/addGames';
import addTeams  from './Components/AdminPages/Forms/addTeams';

import Footer from './Components/footer';

class App extends React.Component {
   render(){
       return(
          <div className = "primary-layout">
            <Header/>
            <main>
               <Route path="/" exact component={Home} />
               <Route path="/About" exact component={About} />
               <Route path="/Schedule" exact component={Schedule} />
               <Route path="/Stats" exact component={Stats} />
               <Route path="/Standings" exact component={Standings} />
               <Route path="/Teams" exact component={Teams} />
               <Route path="/Awards" exact component={Awards} />
               <Route path="/Policy" exact component={Policy} />
               <Route path="/contact-us" exact component={Contact} />
               <Route path="/Admin" exact component={Admin} />
               <Route path="/addGames" exact component={addGames} />
               <Route path="/addTeams" exact component={addTeams} />
            </main>
            <Footer/>
         </div>
       );
   }
}

 ReactDOM.render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>
 , document.getElementById('root'));