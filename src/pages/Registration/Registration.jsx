import { Box } from 'components/Box';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth-operations';
import {
  Form,
  Input,
  StyledButton,
  DecorInput,
  RegistrationHeader,
  Error,
} from './Registration.styled';

export const Registration = () => {
  const dispatch = useDispatch();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box pt={6}>
      <Form onSubmit={handleSubmit(data => dispatch(register(data)))}>
        <RegistrationHeader>Registration</RegistrationHeader>
        <DecorInput>
          <Input
            label="Name"
            variant="outlined"
            type="text"
            {...registerForm('name', {
              required: 'Please, enter your name',
            })}
          />
          <Error>{errors.name?.message}</Error>
        </DecorInput>
        <DecorInput>
          <Input
            label="Email"
            variant="outlined"
            {...registerForm('email', {
              required: 'Please, enter your email',
            })}
            type="email"
          />
          <Error>{errors.email?.message}</Error>
        </DecorInput>
        <DecorInput>
          <Input
            label="Password"
            variant="outlined"
            {...registerForm('password', {
              required: 'Please, enter your password',
              minLength: { value: 7, message: 'Min Length 7' },
            })}
            type="password"
          />
          <Error>{errors.password?.message}</Error>
        </DecorInput>

        <StyledButton type="submit" variant="outlined">
          Registration
        </StyledButton>
      </Form>
    </Box>
  );
};
