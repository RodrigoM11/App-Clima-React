import React,{ useContext } from 'react';
import { useMutation } from '@apollo/client';
import { UserForm } from '../UserForm/index';
import { LOGIN } from '../../container/loginMutation';
import { Context } from '../../contextAuth';
import { P, Div } from './styled';

export const LoginMutationComponent = () => {

    const [login, { loading, error, data }] = useMutation(LOGIN);
    const { activateAuth } = useContext(Context);

    const onSubmit = async ({ email, password }) => {
      try {
        const response = await login({
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
    return <UserForm disabled={loading} error={errorMessage} title='Iniciar Sesion' onSubmit={onSubmit} />; 
  };