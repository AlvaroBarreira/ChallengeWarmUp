import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({...props}) {

    const user = JSON.parse(localStorage.getItem("token"))


    if (user === null || user === undefined) return <Redirect to="/" />


    return (
        <Route {...props} />
    )
}

export default PrivateRoute
