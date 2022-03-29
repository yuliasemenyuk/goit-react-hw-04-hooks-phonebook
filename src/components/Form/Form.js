import React, { useState } from "react";
import propTypes from "prop-types";
import style from "./Form.module.css";

function Form ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameInputChange = (evt) => {
    setName(evt.target.value)
  };

  const handleNumberInputChange = (evt) => {
    setNumber(evt.target.value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("")
  };

    return (
      <form onSubmit={handleSubmit}>
        <label className={style.saving_lable}>
          Name{" "}
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameInputChange}
          />
        </label>
        <label className={style.saving_lable}>
          Number
          <input
            className={style.input}
            type="number"
            name="number"
            value={number}
            required
            onChange={handleNumberInputChange}
          />
        </label>
        <button className={style.saving_btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }

Form.propTypes = {
  handleNameInputChange: propTypes.func,
  handleNumberInputChange: propTypes.func,
  handleSubmit: propTypes.func,
  reset: propTypes.func,
};

export default Form;