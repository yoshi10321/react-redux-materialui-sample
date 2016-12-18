import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { connect } from 'react-redux'
import Test from '../components/test.jsx'
import Drawer from '../components/drawer.jsx'
import AjaxSample from '../components/ajax.jsx'

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
