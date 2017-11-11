const userInput = 5
const width = 5
const height = 5
const totalSquares = width * height

let boolArray = []
for (let i = 0; i < totalSquares; i++) {
  boolArray.push(true)
}

const initialState = boolArray

//Actions
const NEW_ARRAY = 'NEW_ARRAY'
const RESET = 'RESET'

//Action Creators
export function newArray(array) {
  const action = { type: NEW_ARRAY, array }
  return action
}

export function reset() {
  const action = { type: RESET }
  return action
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = Object.assign([], state)

  switch (action.type) {
    case NEW_ARRAY:
      newState = action.array
      return newState

    case RESET:
      newState = initialState
      return newState

    default:
      return newState
  }
}
