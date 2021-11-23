import React from 'react'
import NavBar from '../Components/NavBar/NavBar'

function Layout({children}) {
    return (
        <>
        <NavBar />
            {children}
        </>
    )
}

export default Layout
