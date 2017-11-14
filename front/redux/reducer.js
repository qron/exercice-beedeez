import * as actions from '../actions'

// Initial state
let initialState = {
  isFetching: false,
  capsules: [],
  search: '',
  filtered: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_CAPSULES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case actions.RECEIVE_CAPSULES:
      return Object.assign({}, state, {
        isFetching: false,
        capsules: action.capsules,
        filtered: action.capsules
      })
    default:
      return state
  }
}

export default reducer
