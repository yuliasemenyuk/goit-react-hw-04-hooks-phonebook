import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import style from "./App.css";

export default function App () {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    console.log(name, number);
  
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
    setContacts([...contacts, newContact])
    // this.setState(({ contacts }) => ({
    //   contacts: [newContact, ...contacts],
    // }));
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((c) => c.id !== contactId))
    // this.setState((prevState) => ({
    //   contacts: prevState.contacts.filter((c) => c.id !== contactId),
    // }));
  };

  const contactFind = (evt) => {
    setFilter(evt.currentTarget.value)
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts)
      }
  },[]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);
    // const contactsFind = getFilteredContacts();

    return (
      <div className={style.container}>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter filter={filter} change={contactFind} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
