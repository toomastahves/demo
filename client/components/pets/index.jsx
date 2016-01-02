'use strict';
import React, { Component } from 'react';
import PetsList from './PetsList';
import { Link } from 'react-router';

class Pets extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.setState({
      pets: [
        {name: 'fluffy'},
        {name: 'puffy'}
      ]
    })
  }
  render() {
    const pets = this.state.pets;
    return(
      <div>
        <Link to='petform'>Add new</Link><br/>
        <PetsList pets={pets} />
      </div>
    );
  }
}

export default Pets;
