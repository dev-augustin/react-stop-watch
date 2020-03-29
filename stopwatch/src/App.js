import React from 'react';
import './App.css';
import Header from './components/Header'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state=
    {startTime:2}
  }
  startTimer(){
    
    //console.log("timerStarts")
    setInterval(this.state.startTime, 1000)
   

  }
 
  render()
  {
    return (
    <div> 
      <Header/>
      <div className="counter">{this.state.startTime}</div>
      <div className='centerButton'>
        <button id="start" onClick={()=>this.startTimer()}>Start</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>

      </div>  
    
    </div>
  );
}}


export default App;




