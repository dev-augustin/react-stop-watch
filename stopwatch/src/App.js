import React from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
class App extends React.Component {

  render()
  {
    return (

    <div> 
      <Header/>
      <Timer/>
      </div>  
     );
}
}

export default App;




