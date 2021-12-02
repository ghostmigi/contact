import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import server from "../api/server";
import Editor from "./Editor";

const Contacts = () => {
  const [contact, setContact] = useState([]);

  const getContact = async () => {
    const res = await server.get("/contact");
    setContact(res.data);
  };

  const handleDelete = (id) => {
    server.delete(`/contact/${id}`).then((res) => {
      if (res.status !== 200) {
        alert("No contact to delete");
      } else {
        alert("Contact deleted");
        getContact();
      }
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  const renderContacts = () => {
    return (
      <tbody>
        {contact.map((contact, index) => (
          <Editor
            key={index}
            index={index}
            id={contact.id}
            firstname={contact.firstname}
            lastname={contact.lastname}
            email={contact.email}
            phone={contact.phone}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th>
            <Link
              to={"/contacts/new"}
              className="btn btn-info"
              role="button"
              aria-pressed="true"
            >
              New Contact
            </Link>
          </th>
        </tr>
      </thead>
      {renderContacts()}
    </table>
  );
};

export default Contacts;
