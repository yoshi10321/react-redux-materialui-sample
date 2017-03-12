import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class UserList extends React.PureComponent {

  render () {
    const { userList } = this.props
    console.log(userList.data)
    const listItems = userList.data.map((user) =>
      <li key={user.id}>{user.name} {user.age} {user.email}</li>
    )

    return (
      <div>
        <p>UserList</p>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

UserList.propTypes = {
  userList: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(UserList)
