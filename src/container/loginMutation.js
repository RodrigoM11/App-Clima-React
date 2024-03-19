import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($input: UserCredentials!) {
    login (input: $input)
    
  }
`;