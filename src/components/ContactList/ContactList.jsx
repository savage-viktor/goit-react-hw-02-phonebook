export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button onClick={onDelete} type="button" id={contact.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
