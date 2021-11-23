import { SET_MODAL, CLOSE_MODAL, LOG_IN } from '../Actions/actionsTypes'

let initialState = {
    show: false,
    user: false,
}

export default function ReducerComponent(state = initialState, action) {

    switch(action.type) {

        case SET_MODAL: 
            return {
                ...state, 
                show: action.payload
            }

        case CLOSE_MODAL:
            return {
                ...state,
                show: action.payload
            }

        case LOG_IN:
            return {
                ...state,
                user: action.payload
            }    
        
        default: 
            return {
                ...state,
            }    
    }

}