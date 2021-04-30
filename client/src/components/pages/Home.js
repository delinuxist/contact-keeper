import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className="grid-2">
      {/* form */}
      <div>
        <ContactForm />
      </div>
      {/* Contacts */}
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
