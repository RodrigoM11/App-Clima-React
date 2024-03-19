import React, { Fragment } from 'react';
import { LoginMutationComponent } from '../LogingMutation';
import { SignupMutationComponent } from '../SignupMutation';
import { Div } from './styled';

export const LoginSignupComponent = () => {

    return <Div>
        <LoginMutationComponent />
        <SignupMutationComponent />
    </Div>
}