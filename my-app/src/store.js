import {createStore} from 'redux'
import babyReducer from './reducer/reducer'
const store = createStore(babyReducer)
export default store;