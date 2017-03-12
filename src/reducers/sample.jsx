const initialState = {
  fuga: 1,
  text: 'レスポンス'
}

function sample (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { fuga: state.fuga + 1 }
    }
    case 'REQUEST_SUCCESS': {
      return { text: action.text }
    }
    default:
      return state
  }
}

export default sample
