import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth-operations';
import {
  Form,
  Input,
  StyledButton,
  DecorInput,
  RegistrationHeader,
} from './Registration.styled';

export const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Box pt={6}>
      <Form onSubmit={onSubmit}>
        <RegistrationHeader>Registration</RegistrationHeader>
        <DecorInput>
          <Input
            label="Name"
            variant="outlined"
            name="name"
            type="text"
            value={name}
            onChange={onChange}
            required
          />
        </DecorInput>
        <DecorInput>
          <Input
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            required
          />
        </DecorInput>
        <DecorInput>
          <Input
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            onChange={onChange}
            value={password}
            required
          />
        </DecorInput>

        <StyledButton type="submit" variant="outlined">
          Registration
        </StyledButton>
      </Form>
    </Box>
  );
};
