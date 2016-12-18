import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

export default class CommonDrawer extends React.PureComponent {

  constructor (props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {open: false}
  }

  handleToggle () { this.setState({open: !this.state.open}) }

  render () {
    return (
      <div>
        <AppBar
          title='react redux materialui sample'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}
          />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem>Menu1</MenuItem>
          <MenuItem>Menu2</MenuItem>
          <MenuItem>Menu3</MenuItem>
        </Drawer>
      </div>
    )
  }
}
