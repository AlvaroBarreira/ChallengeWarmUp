import React from 'react'
import FormAdd from '../Components/FormAdd/FormAdd'
import { useSelector } from 'react-redux';
import FormEdit from '../Components/FormEdit/FormEdit';
import Layout from '../Layout/Layout';

function User() {

    return (
        <Layout>        
            <FormEdit />
        </Layout>
    )
}

export default User
