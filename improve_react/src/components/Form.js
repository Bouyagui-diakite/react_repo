import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comment: "",
         topic: "react"
      }
    }

    handleChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    commentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    handletopic = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit =(event) =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {username, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
               <label>Username</label>
               <input type="text" value={username} onChange={this.handleChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comment} onChange ={this.commentChange}></textarea>
            </div>

            <div>Topic</div>
            <select>
                <option value={topic} onChange ={this.handletopic}>React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
            <button type='submit'>Submit</button>

            </form>
        );
    }
}

export default Form;