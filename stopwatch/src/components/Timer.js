import React from 'react'; 

class Timer extends React.Component {
    constructor(props){
      super(props);
      this.state=
      {startTime:0,
       isTimerState:true,
       intervalId1:0
    }
    }
     startTime(){
         this.intervalId=(
                setInterval(()=>{this.setState({
                    startTime: this.state.startTime+1,
                    isTimerState: false})},
                    1000))
                   
                    console.log("state: "+this.intervalId)}     
         
         pauseTime(){
            clearInterval(this.intervalId)
            console.log("state: "+this.intervalId)  
            
            //console.log("pause: "+this.state.intervalId1)    
        }  
            
            stopTime(){
                    this.setState({startTime:0})
                    clearInterval(this.intervalId)
                          
                }  
     
    render()
    {
      return (
  
      <div> 
      
        <div className="counter">Time: {this.state.startTime}</div>
        <div className='centerButton'>
          <button id="start" onClick={()=>this.startTime()}>Start</button>
          <button id="pause" onClick={()=>this.pauseTime()}>Pause</button>
          <button id="stop" onClick={()=>this.stopTime()}>Reset</button>
  
        </div>  
      
      </div>
    );
  }}
  
  
  export default Timer;