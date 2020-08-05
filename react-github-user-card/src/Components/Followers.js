import React from 'react';
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import App from "../App"

class Followers extends React.Component{
    state = {
        followers: {}
    }
    componentDidMount() {
        axios.get("https://api.github.com/users/richard-mcghee/followers")
        .then((res) => {
          // console.log(res.data)
          this.setState({followers: res.data})
          console.log(this.state.followers)
        })
        .catch((err) => {
          console.dir(err)
        })
      }
    render() {
        return (
            <div>
                <h1>I have no followers</h1>
                <Link to="/">Back Home</Link>
                <Route exact path="/" component={App} />
            </div>
        )
    }
}

export default Followers