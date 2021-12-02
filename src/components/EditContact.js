import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import server from "../api/server";

const EditContact = (props) => {
  const { id } = props.match.params;
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
    server.put(`/contact/${id}`, person).then((res) => {
      if (res.data) {
        props.history.push("/contacts");
      }
    });
  };

  useEffect(() => {
    const getContact = () => {
      server.get(`/contact/${id}`).then((res) => {
        if (res.data) {
          setPerson(res.data);
        } else {
          alert("No Client !!!");
        }
      });
    };
    getContact();
  }, [id]);

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
        Update Contact
      </button>
    </form>
  );
};

export default withRouter(EditContact);
