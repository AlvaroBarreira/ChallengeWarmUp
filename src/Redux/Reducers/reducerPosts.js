import { 
    GET_POSTS,
    VIEW_POST,
    NEW_POST,
    DELETE_POST,
    EDIT_POST,
    GET_EDIT_POST
} from '../Actions/actionsTypes'

let initialState = {
    posts: [],
    post: [],
    postDetail: [],
}



export default function Reducer(state = initialState, action) {

    switch(action.type) {

        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,

            }
        
        case VIEW_POST:
            return {
                ...state,
                postDetail: action.payload,
            }
        
        case NEW_POST: 
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case DELETE_POST: {
            const arrayFiltered = state.posts.filter((post) => post.id !== action.payload.id )
            return {
                ...state,
                posts: arrayFiltered
            };
        }

        case GET_EDIT_POST: 
            return {
                ...state,
                post: action.payload
            }

        case EDIT_POST: 
            return {
                ...state,
                post: action.payload
            }    

        default: 
            return {
                ...state,
               
            }    

    }


}