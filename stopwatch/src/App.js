import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    
    }
  }
  
  render()
  {
    return (
    <div> 
      <h2>Stop Watch</h2>
      <div className="App" >
        <button id="start">Start</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>

      </div>  
      {/* <h3>Count= </h3> */}
    </div>
  );
}


export default App;




