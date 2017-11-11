import { combineReducers, createStore } from 'redux'
import gridStore from './reducers/gridStore'
import setBoard from './reducers/setBoard'

const reducer = combineReducers({
  bool: gridStore,
  dimensions: setBoard
})

const store = createStore(reducer)

export default store

export * from './reducers/gridStore'
export * from './reducers/setBoard'
