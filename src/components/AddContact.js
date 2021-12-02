import { useState } from "react";
import { withRouter } from "react-router-dom";
import server from "../api/server";

const AddContact = (props) => {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveConact();
  };

  const saveConact = () => {
    server.post("/contact", person).then((res) => {
      if (res.data) {
        props.history.push("/contacts");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="FirstName">Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstname"
          placeholder="Add FirstName"
          defaultValue={person.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="LastName">LastName:</label>
        <input
          type="text"
          className="form-control"
          name="lastname"
          placeholder="Add LastName"
          defaultValue={person.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Add Email"
          defaultValue={person.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Add Phone"
          defaultValue={person.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  );
};

export default withRouter(AddContact);
