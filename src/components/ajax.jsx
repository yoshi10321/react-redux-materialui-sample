import React from 'react'
import { connect } from 'react-redux'
import { fetchSomeResource } from '../actions/ajax.jsx'

export class AjaxSample extends React.PureComponent {

  render () {
    this.state = this.props
    return (
      <div>
        <p>ajaxサンプル</p>
        <p>{this.state.text}</p>
        <button onClick={() => this.state.handleClick()}>リクエスト</button>
      </div>
    )
  }
}

// ↓redux
function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => { dispatch(fetchSomeResource()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AjaxSample)
