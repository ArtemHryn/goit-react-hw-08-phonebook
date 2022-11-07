import { Box } from 'components/Box';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth-operations';
import { getAuthError } from 'redux/selectors';
import {
  Form,
  Input,
  StyledButton,
  DecorInput,
  LoginTitle,
  Error,
  AuthError,
} from './LoginForm.styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  return (
    <Box pt={6}>
      {error && <AuthError>{error}</AuthError>}
      <Form
        onSubmit={handleSubmit(data => {
          dispatch(logIn(data));
        })}
      >
        <LoginTitle>Log In</LoginTitle>

        <DecorInput>
          <Input
            label="Email"
            variant="outlined"
            {...register('email', {
              required: 'Please, enter Email',
            })}
            type="email"
          />
          {errors.email?.message && <Error>{errors.email.message}</Error>}
        </DecorInput>
        <DecorInput>
          <Input
            label="Password"
            variant="outlined"
            {...register('password', {
              required: 'Please, enter Password',
              minLength: { value: 7, message: 'Min Length 7' },
            })}
            type="password"
          />
          {errors.password?.message && <Error>{errors.password.message}</Error>}
        </DecorInput>

        <StyledButton type="submit" variant="outlined">
          Log In
        </StyledButton>
      </Form>
    </Box>
  );
};
