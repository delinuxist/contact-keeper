import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../type";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Emmanuel Obeng",
        email: "obeng468@gmail.com",
        phone: "024-2444-456",
        type: "Professional",
      },
      {
        type: "Personal",
        id: "2",
        name: "Sheila Quaye",
        email: "quayesheila21@gmail.com",
        phone: "050-805-1934",
      },
      {
        type: "Personal",
        id: "3",
        name: "Stanley Obeng",
        email: "stanleyobeng@gmail.com",
        phone: "050-332-7041",
      },
    ],
  };

  const [state, dispach] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
