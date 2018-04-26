
const defaultState = {

}

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_SOMETHING":
      return {something_in_state: state.something_in_state.concat(action.something)}
    default:
      return state
  }
}
