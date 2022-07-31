import PropTypes from 'prop-types';
import { ContactListStyled, ContactItem, Button } from './ContactList.styled';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ContactListStyled>
      {contactList.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <Button
              onClick={() => {
                onDelete(contact.id);
              }}
              type="button"
            >
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDelete: PropTypes.func.isRequired,
};
