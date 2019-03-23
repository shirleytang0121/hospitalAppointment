import React, { Component } from 'react';
import './App.css';
import MakeAppointment from './appointment/MakeAppoint.js'

class App extends Component {
  state={
      makeAppointmentshow:false
  }

  makeAppointment=()=>{
    this.setState({makeAppointmentshow:!this.state.makeAppointmentshow})
}
addAppoitment=(e)=>{
  e.preventDefault()
  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to our project
        </header>
        <div>
          <button>Doctor Profilo</button>
          <button onClick={this.makeAppointment.bind(this)}>Make appointment</button>
          <button>Check appointment</button>
          <button>Account</button>
        </div>
       <div>
         <MakeAppointment toshow={this.state.makeAppointmentshow}/>
       </div>
      </div>
    );
  }
}

export default App;

