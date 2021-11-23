import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import Reducer from '../Reducers/reducerPosts'
import ReducerComponent from '../Reducers/reducerComponents'

const rootReducer = combineReducers({
    ReducerComponent: ReducerComponent,
    Reducer: Reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;