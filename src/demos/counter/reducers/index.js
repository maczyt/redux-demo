import { combineReducers } from 'redux'

import counter from './counts'
let rootReducer = combineReducers({
  counter
})

export default rootReducer