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

// class MessageInput extends Component {
//
//   handleSubmit = () => {
//     if(this.)
//   }
//
//   render() {
//     return(
//       <div>
//         <h1>MessageInput</h1>
//         <input type="text" placeholder="Enter message ..." />
//       </div>
//     )
//   }
// }

export default MessageInput
