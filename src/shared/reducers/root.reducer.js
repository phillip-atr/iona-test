import { combineReducers } from 'redux'
import catReducer from './cat.reducer'

const reducers = combineReducers({
    cats: catReducer
})

export default reducers