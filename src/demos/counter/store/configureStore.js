import { createStore } from 'redux'
import Reducer from '../reducers'

export default function configureStore() {
  const store = createStore(Reducer)
  return store
}