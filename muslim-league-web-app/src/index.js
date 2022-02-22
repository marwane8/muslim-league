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

import reportWebVitals from './reportWebVitals';

class App extends React.Component {
   render(){
       return(
          <div className = "primary-layout">
            <Header/>
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
