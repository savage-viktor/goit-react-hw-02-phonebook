import React from 'react';
import { AddContact } from './AddContact/AddContact';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addContactHandler = event => {
    event.preventDefault();
    console.log('Submit');
  };

  render() {
    return <AddContact onSubmit={this.addContactHandler} />;
  }
}

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
console.log(nanoid());
