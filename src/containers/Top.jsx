import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { connect } from 'react-redux'
import Test from '../components/test'
import Drawer from '../components/drawer'
import AjaxSample from '../components/ajax'

injectTapEventPlugin()

export var Top = class Top extends React.PureComponent {
  render () {
    return (
      <div>
        <Drawer />
        <h1>top page</h1>
        <Test />
        <br />
        <AjaxSample />
      </div>
    )
  }
}

export default connect()(Top)
