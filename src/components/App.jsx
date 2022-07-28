import React from 'react';
import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { FindContact } from './FindContact/FindContact';

import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContactHandler = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    let isSameName = false;
    this.state.contacts.map(contact => {
      if (contact.name === name) {
        alert('is already in contacts');
        isSameName = true;
      }
    });

    if (isSameName === false) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      }));
    }

    event.currentTarget.reset();
  };

  inputHandler = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  onFindHandler = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  deleteContact = event => {
    console.log(event.currentTarget.id);
    const newCont = this.state.contacts.filter(contact => {
      return contact.id !== event.currentTarget.id;
    });
    console.log(newCont);

    this.setState({
      contacts: [...newCont],
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.includes(this.state.filter);
    });

    return (
      <div>
        <AddContact
          onSubmit={this.addContactHandler}
          onInput={this.inputHandler}
        />
        <FindContact onInput={this.onFindHandler} />

        <ContactList
          contactList={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
