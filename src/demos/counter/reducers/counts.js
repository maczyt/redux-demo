const [ADD_COUNT, DELETE_COUNT] = ['ADD_COUNT', 'DELETE_COUNT']

export default function counter(state = 0, action) {
  switch(action.type) {
    case ADD_COUNT:
      return state + 1
    case DELETE_COUNT:
      return state - 1
    default:
      return state
  }
}