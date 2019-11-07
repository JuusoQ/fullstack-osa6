import React from 'react'
import {connect} from 'react-redux';

const Notification = (props) => {

  //console.log(props.store.getState().notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification.show === true) {
    return (
      <div style={style}>
        {props.notification.message}
      </div>
    )
  } else {
    return null
  }

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification);

export default ConnectedNotification