import React from 'react'; 

class Timer extends React.Component {
    constructor(props)
    {
      super(props);
      this.state=
      {startTime:0}
    }
     startTime()
        {
         this.intervalId=(
            setInterval(()=>{this.setState({
            startTime: this.state.startTime+1,
            })},1000));
                   
            //console.log("state: "+this.intervalId)
        }     
         
     pauseTime()
        {
          //to pause/cancel setInterval
          //Reference: https://dev.to/dance2die/canceling-interval-in-react-52b5
          clearInterval(this.intervalId);
          console.log("state: "+this.intervalId);  
            
          //console.log("pause: "+this.state.intervalId1)    
        }  
            
     stopTime()
        {
          this.setState({startTime:0})
          clearInterval(this.intervalId)
                          
        }  
        
    render()
    {
      return (
  
      <div> 
      
        <div className="counter">: {this.state.startTime}</div>
        <div className='centerButton'>
          <button id="start" onClick={()=>this.startTime()}>Start</button>
          <button id="pause" onClick={()=>this.pauseTime()}>Pause</button>
          <button id="stop" onClick={()=>this.stopTime()}>Reset</button>
  
        </div>  
      
      </div>
    );
  }}
  
  
  export default Timer;

   //Reference: https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks 