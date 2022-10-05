import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  ErrorText,
  FormBlock,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({onAddTask }) => {
    const onFormSubmit = (value, { resetForm }) => {
        onAddTask(value)
        resetForm()
    }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      <FormBlock autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBlock>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddTask: PropTypes.func,
};