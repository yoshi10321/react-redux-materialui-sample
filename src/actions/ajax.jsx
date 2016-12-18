import request from 'superagent'

function requestSuccess (text) {
  return {
    type: 'REQUEST_SUCCESS',
    text: text
  }
}

export function fetchSomeResource () {
  return (dispatch, getState) => {
    return new Promise(() => {
      request
      .get('http://localhost:8080/test')
      .end((err, res) => {
        if (err != null) {
          console.log(err)
        }
        dispatch(requestSuccess(res.body.text))
      })
    })
  }
}
