import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactsFiltered";

const Home = () => {
  return (
    <div className="grid-2">
      {/* form */}
      <div>
        <ContactForm />
      </div>
      {/* Contacts */}
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
