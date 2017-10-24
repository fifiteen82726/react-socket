import React, { Component } from 'react'

const MessageInput = props => {

  const handleSubmit = event => {

    if (event.key === 'Enter') {
      props.onSubmit(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <input type="text" placeholder="Enter message ..." onKeyPress={handleSubmit} />
  )
}

export default MessageInput
