import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { UserForm } from '../UserForm/index';
import { SIGNUP } from '../../container/signupMutation';
import { Context } from '../../contextAuth';
import { P, Div } from './styled';

export const SignupMutationComponent = () => {
  
  
    const [signup, { loading, error, data }] = useMutation(SIGNUP);
    const { activateAuth } = useContext(Context);

    const onSubmit = async ({ email, password }) => {
      try {
        const response = await signup({
          variables: {
            input: {
              email: email,
              password: password
            },
          },
        });

        console.log(response.data);
  
      } catch (error) {
        console.error('Error al realizar la mutación:', error);
      }
    };
  
    let errorMessage = '';
  
    if (loading) return <Div><P>Cargando...</P></Div>;
  
    if (error) {
      const errorMessage = error.message || 'Error desconocido';
      return <Div><P>Error: {errorMessage}</P></Div>;
    }
  
    if (data) {
      activateAuth(data);
    }
    return <UserForm disabled={loading} error={errorMessage} title='Registrarse' onSubmit={onSubmit} />;  
  };
  