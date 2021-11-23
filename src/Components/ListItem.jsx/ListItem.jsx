import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, viewPost, getEditPost } from '../../Redux/Actions/actionsPosts'
import { useHistory } from 'react-router';
import { setModal } from '../../Redux/Actions/actionsComponents'
import Swal from "sweetalert2"

function ListItem({id, title}) {

    const dispatch = useDispatch()

    const history = useHistory()

    const handleView = (id) => {
  
        dispatch(viewPost(id))
        dispatch(setModal())      
  
    }
   


    const handleDelete = (id) => {
        dispatch(deletePost(id))

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
            title: 'Delete successfully'
          })
    }

    const handleEdit = (id) => {

        history.push('/Edit')

        dispatch(getEditPost(id))

    }

    
    return (
        <tr>
            <td>
                {title}
            </td>

            <td style={{display: "block", margin: "auto"}}>
                <a 
                className="btn btn-secondary btn-outline-dark" 
                onClick={() => handleEdit(id)}
                style={{margin: "5px 5px", color: "white", border: "none", width: "80px"}}
                >
                    Edit
                </a>
                <a 
                className="btn btn-info btn-outline-dark" 
                onClick={() => handleView(id)}
                style={{margin: "5px 5px", color: "white", border: "none", width: "80px"}}
                >
                    View
                </a>
                <a 
                className="btn btn-danger btn-outline-dark" 
                onClick={() => handleDelete(id)}
                style={{margin: "5px 5px", color: "white", border: "none", width: "80px"}}
                >
                    Delete
                </a>
            </td>
            
        </tr>
    )
}

export default ListItem
