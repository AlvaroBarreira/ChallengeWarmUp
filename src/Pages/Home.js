import React from 'react'
import List from '../Components/List/List'
import Modal from '../Components/Modal/Modal';
import Layout from '../Layout/Layout';

function Home() {
    return (
        <>
        <Layout>
            <List />
            <Modal />
        </Layout>
        </>
    )
}

export default Home
