import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PublicRoute({...props}) {

    const user = JSON.parse(localStorage.getItem("token"))

    if (user) return <Redirect to="/Home"/>

    return (
        <Route {...props}/>
    )
}

export default PublicRoute
