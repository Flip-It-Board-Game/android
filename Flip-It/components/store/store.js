import { combineReducers, createStore } from 'redux'
import gridStore from './reducers/gridStore'

const reducer = combineReducers({
  bool: gridStore
})

const store = createStore(reducer)

export default store

export * from './reducers/gridStore'
