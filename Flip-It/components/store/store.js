import { combineReducers, createStore } from 'redux'
import gridStore from './reducers/gridStore'
import setBoard from './reducers/setBoard'
import counter from './reducers/counter'

const reducer = combineReducers({
  bool: gridStore,
  dimensions: setBoard,
  count: counter
})

const store = createStore(reducer)

export default store

export * from './reducers/gridStore'
export * from './reducers/setBoard'
export * from './reducers/counter'
