import React, { Component } from 'react';

class PetsList extends Component {
  render () {
    let pets = this.props.pets;
    return (
      <div>
        Pets list
        {pets.map((pet, i) => (<div key={i}>{pet.name}</div>))}
      </div>

    );
  }
}

export default PetsList;
