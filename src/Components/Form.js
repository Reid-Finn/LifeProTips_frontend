import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addLifeProTip } from '../actions';


class Form extends Component {
  state = {
    title: '',
    content: '',
    genre: '',
    author: ''
  }




  handleOnChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
        this.props.addLifeProTip(this.state, this.props.history)
    console.log(this.state)
    this.setState({
        title: '',
        content: '',
        genre: '',
        author: ''
    })
  }


  render() {
    return (
      <div className="form-container">
        <h3>Create your LifeProTip!</h3>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} type="text" name="title" placeholder="Title" value={this.state.title}/>
          <br /><br />
          <input  onChange={this.handleOnChange} ype="text" name="content" placeholder="Enter your LPT here!" value={this.state.content} />
          <br /><br />
          <input  onChange={this.handleOnChange} type="text" name="genre" placeholder="genre" value={this.state.genre} />
          <br /><br />
          <input  onChange={this.handleOnChange} type="text" name="author" placeholder="Put your name here" value={this.state.author}/>
          <br /><br />
          <input type="submit" id="submit-btn" value="Post it!" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addLifeProTip })(Form);