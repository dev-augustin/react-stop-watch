import React from 'react'; 

class Timer extends React.Component {
    constructor(props){
      super(props);
      this.state=
      {startTime:0}
    }
  
   
    render()
    {
      return (
  
      <div> 
      
        <div className="counter"></div>
        <div className='centerButton'>
          <button id="start" onClick={()=>this.startTimer()}>Start</button>
          <button id="pause">Pause</button>
          <button id="stop">Stop</button>
  
        </div>  
      
      </div>
    );
  }}
  
  
  export default Timer;