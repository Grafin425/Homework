import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import {Button} from "../Tags";

export const LoginButton = () => {
    const {loginWithRedirect,isAuthenticated} = useAuth0();

    return (
        !isAuthenticated&&(
        <Button  onClick={() => loginWithRedirect()}>
            Login
        </Button>
    )
    )
}
