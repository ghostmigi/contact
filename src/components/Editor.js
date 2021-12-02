import { Link } from "react-router-dom";

const Editor = ({ index, id, firstname, lastname, email, phone, onDelete }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <Link
          to={`/contacts/${id}/edit`}
          className="btn btn-success mr-4"
          role="button"
          aria-pressed="true"
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Editor;
