import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ onInput }) => {
  return (
    <Label>
      Find contact by name
      <Input
        onChange={onInput}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};
