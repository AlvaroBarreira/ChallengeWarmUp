

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { newPost } from '../../Redux/Actions/actionsPosts'
import Swal from "sweetalert2"


function FormAdd() {

    const dispatch = useDispatch()

    const titleRef = useRef()
    const bodyRef = useRef()

    const handleAdd = () => {


        const title = titleRef.current.value
        const body = bodyRef.current.value

        if (title === '' || body === '') {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Fields cannot be empty'
              })

        } else {

            let info = {
                title: title,
                body: body
            }
    
            dispatch(newPost(info))
    
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: `User sucessfully added!`,
                text: `Name: ${title}`
              })
    
              titleRef.current.value = null;
              bodyRef.current.value = null;
    

        }
     
    }

    return (
        
            <form style={{width: "400px", margin: "25px auto", display: "block"}}>
                <h3 className="text-center">Add post</h3>

                <div className="form-group">
                    <input type="text" className="form-control" ref={titleRef}  placeholder="Insert title" style={{margin: "5px auto"}}/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control"  ref={bodyRef} placeholder="Insert body" style={{margin: "5px auto"}}/>
                </div>


                <a 
                    className="btn btn-primary btn-block" 
                    onClick={() => handleAdd()}
                    style={{margin: "10px auto", display: "block", width: "100px"}}
                >Submit</a>

            </form>
    )     
}

export default FormAdd
