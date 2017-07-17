const [ADD_COUNT, DELETE_COUNT] = ['ADD_COUNT', 'DELETE_COUNT']

export function addCount() {
  return {
    type: ADD_COUNT
  }
}

export function deleteCount() {
  return {
    type: DELETE_COUNT
  }
}