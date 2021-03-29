import React, { Component } from 'react';
import './App.css';
import Photo from "./Primož.jpg";
import Profile from './Profile'

class App extends Component  {
  constructor(props){
    super(props)
    this.state={person:{
    fullName :"Primož Roglič" ,
    bio :"Primož Roglič (born 29 October 1989) is a Slovenian racing cyclist who currently rides for UCI WorldTeam Team Jumbo–Visma. Roglič started his career as a ski jumper but then shifted to cycling. He is the current world No.1 ranked road cyclist in the UCI World Ranking, having held the top placing for 58 weeks in total (second all-time). He has ended the season twice as the number one ranked cyclist.At the 2017 Tour de France, Roglič became the first Slovenian to win a Tour de France stage. In September 2019, Roglič won the Vuelta a España, becoming the first Slovenian to win a Grand Tour competition.He has also finished on the final podium at the 2019 Giro d'Italia (third overall), and at the 2020 Tour de France (second overall); during the latter race, he became the first Slovenian to wear the yellow jersey, before losing out to compatriot Tadej Pogačar. He won the 2020 Vuelta a España, defending his title from 2019",
    profession : "Racing cyclist",
    photo:<img src ={Photo} alt=''></img>},
    show:false
    }  }  
  render() {
    
  return (
    <div className="App-header">
             {
      this.state.show?
      <div className="App-header">
        <div>{this.state.person.photo}</div>
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.profession}</h2>
        <p>{this.state.person.bio}</p>
        <Profile>
    </Profile>
      </div>
      :null
  }
  
    <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>
      toggle
    </button>
     
   </div> 
  );
}



}

export default App;
