import React, { Component } from 'react'
import axios from "axios"
export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }

    console.log(user)

    axios.post('http://localhost:4000/users/add', user)
    .then(res => console.log(res.data))

    this.setState({
     username: ''
    })
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input
              type='text'
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create User'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    )
  }
}
