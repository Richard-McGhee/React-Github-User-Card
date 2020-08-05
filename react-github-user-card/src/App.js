import React from 'react';
import './App.css';
import UserCards from './Components/UserCards';
import axios from "axios"
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Followers from './Components/Followers'

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
      // console.log(res.data)
      this.setState({user: res.data})
      // console.log(this.state.user)
    })
    .catch((err) => {
      console.dir(err)
    })
    axios.get("https://api.github.com/users/richard-mcghee/followers")
    .then((res) => {
      // console.log(res.data)
      this.setState({followers: res.data})
      // console.log(this.state.followers)
      // console.log(this.state.user)
    })
    .catch((err) => {
      console.dir(err)
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <UserCards user={this.state.user} followers={this.state.followers} />
        <Link to="/followers">My Followers... that I don't have</Link>
        <Route path="/followers" component={Followers} />
      </BrowserRouter>
    );
  }
}

export default App;
