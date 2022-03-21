import React from "react";
import propTypes from "prop-types";

const ContactItem = ({ contactItem }) => (
  <p>
    {contactItem.name}: {contactItem.number}
  </p>
);

ContactItem.propTypes = {
  contactItem: propTypes.object.isRequired,
};

export default ContactItem;