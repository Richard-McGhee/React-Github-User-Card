import React from 'react';
import './App.css';
import UserCards from './Components/UserCards';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  render() {
    return (
      <div className="App">
        <UserCards />
      </div>
    );
  }
}

export default App;
