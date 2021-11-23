import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../Redux/Actions/actionsComponents'



function ModalData() {

    const dispatch = useDispatch()

    const state = useSelector((state) => state)

    const { ReducerComponent } = state

    const { show } = ReducerComponent

    const { Reducer } = state

    const { postDetail } = Reducer

    console.log(postDetail)

    return (

    <> 
      <Modal show={show} onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Title: {postDetail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <p>User Id: {postDetail.id}</p>
          <p>Body: {postDetail.body}</p>
          </>
        </Modal.Body>
      </Modal>
    </>

    )
}

export default ModalData
