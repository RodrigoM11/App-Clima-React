import React, { Fragment, useContext } from 'react'
import { Context } from '../../contextAuth'
import { SubmitButton } from '../SubmitButton/index'
import { Div, StyledLink } from './styled'

export const UserComponent = () => {

    const { removeAuth } = useContext(Context);

    return <Fragment>
         
    <Div>
        <h2>User</h2>
        <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        <StyledLink to='/ '> X </StyledLink>
    </Div>
    </Fragment>
}