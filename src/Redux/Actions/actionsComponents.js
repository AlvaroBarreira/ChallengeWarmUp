import Axios from 'axios';
import Swal from 'sweetalert2'

import { SET_MODAL, CLOSE_MODAL, LOG_IN } from '../Actions/actionsTypes'

const showAlert = () => {

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
        title: 'Error'
      })

}

export function setModal() {

    return function(dispatch) {
        return dispatch({
            type: SET_MODAL,
            payload: true,
        })
    }

}

export function closeModal() {

    return function(dispatch) {
        return dispatch({
            type: CLOSE_MODAL,
            payload: false,
        })
    }

}

const sendData = async (email, password, setIsLoading) => {

    try {
        
        setIsLoading(true)

       const response = await Axios.post("http://challenge-react.alkemy.org/", {email, password})

       localStorage.setItem("token", JSON.stringify(response.data.token));

    } catch (error) {


    

              setIsLoading(true)
                showAlert()

    }
} 


export default sendData;


