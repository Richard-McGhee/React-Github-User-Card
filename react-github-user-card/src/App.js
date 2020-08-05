import React from 'react';
import './App.css';
import UserCards from './Components/UserCards';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/richard-mcghee")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.dir(err)
    })
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
