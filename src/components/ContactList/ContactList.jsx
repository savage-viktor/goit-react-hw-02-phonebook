const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              onClick={() => {
                onDelete(contact.id);
              }}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
