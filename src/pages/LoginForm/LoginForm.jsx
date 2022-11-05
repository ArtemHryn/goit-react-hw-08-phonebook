import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth-operations';
import { Form, Input, StyledButton, DecorInput } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = e => {
    switch (e.target.name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Box pt={6}>
      <Form onSubmit={onSubmit}>
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
