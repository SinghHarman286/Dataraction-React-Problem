import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
        <div>
            <h1>This is the login page</h1>
            <button onClick={() => loginWithRedirect()}>
                Log In
            </button>
        </div>
    )
    )
}

export default LoginButton