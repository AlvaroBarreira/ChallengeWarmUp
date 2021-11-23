import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { editPost } from '../../Redux/Actions/actionsPosts'
import Swal from 'sweetalert2'

function FormEdit() {

    const history = useHistory()

    const state = useSelector((state) => state)

    const { Reducer} = state;

    const { post } = Reducer

    const newTitleRef = useRef()

    const dispatch = useDispatch()

    const showAlert = () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `User sucessfully Edited!`,
          })

    }

    const handleEdit = () => {

      
       
    let info = newTitleRef.current.value

    if (info === '') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Fields cannot be empty',
          })
    } else {
            
    dispatch(editPost(post.userId, info))  
        .then(newTitleRef.current.value = null)
        .then(() => showAlert())
        .then(() => history.push('/Home'))
    }


    }

    return (
        <form style={{width: "400px", margin: "25px auto", display: "block", background: "white", padding: "20px"}}>
        <h3 className="text-center">Edit post</h3>

        <div className="form-group">
            <label>Title</label>
            <input 
                type="text" 
                className="form-control" 
                readonly 
                style={{margin: "10px auto"}}
                value={post.title}
            />
        </div>

        <div className="form-group">
            <label>New Title</label>
            <input 
                type="text" 
                className="form-control" 
                style={{margin: "10px auto"}}
                ref={newTitleRef}

            />
        </div>


        <a 
            className="btn btn-primary btn-block" 
            onClick={() => handleEdit()}
            style={{margin: "10px auto", display: "block", width: "100px"}}
        >Submit</a>

    </form>
    )
}

export default FormEdit
