import Axios from 'axios'
import { 
    GET_POSTS,
    VIEW_POST, 
    NEW_POST,
    DELETE_POST,
    EDIT_POST,
    GET_EDIT_POST

} from './actionsTypes'


export const getPosts = () =>{

    return async function(dispatch) {

        const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')

        return dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }

}

export const viewPost = (id) =>{

    return async function(dispatch) {

        const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      
        return dispatch({
            type: VIEW_POST,
            payload: res.data
        })

        
    }

}

export const newPost = (info) => {

    return async function(dispatch) {

        await Axios.post('https://jsonplaceholder.typicode.com/posts', info)

        return dispatch({
            type: NEW_POST,
            payload: info
        })

    }

}


export const deletePost = (id) => {

    return async function (dispatch) {

        const res = await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
           

            return dispatch({
                type: DELETE_POST,
                payload: {
                    id: res.data.id,
                }
            })

    }

}


export const getEditPost = (id) => {

    return async function (dispatch) {

        const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        return dispatch({
            type: GET_EDIT_POST,
            payload: res.data
        })

    }

}



export const editPost = (id, info) => {

    return async function (dispatch) {

        const res = await Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, info)

        return dispatch({
            type: EDIT_POST,
            payload: res.data
        })

    }

}

