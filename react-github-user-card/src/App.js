import React from 'react';
import './App.css';
import UserCards from './Components/UserCards';
import axios from "axios"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/richard-mcghee")
    .then((res) => {
      console.log(res.data)
      this.setState({user: res.data})
      console.log(this.state.user)
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
