import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppBox, Title, SectionBox } from './App.styled';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactHandler = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    let isSameName = false;
    this.state.contacts.map(contact => {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        isSameName = true;
      }
      return 0;
    });

    isSameName ||
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      }));

    event.currentTarget.reset();
  };

  onFindHandler = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return (
      <AppBox>
        <SectionBox>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContactHandler} />
        </SectionBox>

        <SectionBox>
          <Title>Contacts</Title>
          <Filter onInput={this.onFindHandler} />
          <ContactList
            contactList={filteredContacts}
            onDelete={this.deleteContact}
          />
        </SectionBox>
      </AppBox>
    );
  }
}
