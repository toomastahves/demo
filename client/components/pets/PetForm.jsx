'use strict';
import React, { Component } from 'react';

class PetForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    console.log('submitted', name);
  }
  handleChange() {
    const name = this.refs.name.value;
    console.log('changed', name);
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input id='name' ref='name' type='text' />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default PetForm;
