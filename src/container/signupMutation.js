import { gql } from '@apollo/client';


export const SIGNUP = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
    
  }
`;





