import React, { Component } from "react";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import style from "./App.css";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    console.log(name, number);
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => c.id !== contactId),
    }));
  };

  contactFind = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const contactsFind = this.getFilteredContacts();

    return (
      <div className={style.container}>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter filter={this.state.filter} change={this.contactFind} />
        <ContactList
          contacts={contactsFind}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
