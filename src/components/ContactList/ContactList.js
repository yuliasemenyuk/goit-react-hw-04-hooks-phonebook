import React from "react";
import propTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";

 function ContactList ({ contacts, onDeleteContact }) {

    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem contactItem={{ name, number, id }}></ContactItem>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;