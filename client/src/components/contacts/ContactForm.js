import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
  });

  const OnChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, phone, type } = contact;
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={OnChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={OnChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={OnChange}
      />
      <h3>Contact Type: </h3>
      <input
        type="radio"
        name="type"
        value="Personal"
        checked={type === "Personal"}
      />
      Personal {""}
      <input
        type="radio"
        name="type"
        value="Professional"
        checked={type === "Professional"}
      />
      Professional {""}
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
