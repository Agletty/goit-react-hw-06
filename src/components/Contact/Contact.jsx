import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p> {name}</p>
      <p> {number}</p>
      <button className={css.contacBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
