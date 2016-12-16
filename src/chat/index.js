import React, {PropTypes} from 'react'
import Markdown from '../markdown'
import './index.css'

const ENTER_KEY = 13

export default Chat

function Chat({messages, name, onSubmit}) {
  let nameNode
  return (
    <div>
      <div style={{fontSize: '1.3em'}}>Chat</div>
      <div style={{maxHeight: 300, overflowY: 'scroll'}} ref={updateScrollPosition}>
        {messages.map(({id, name, message}) => (
          <Message key={id} name={name} message={message} />
        ))}
      </div>
      <hr />
      <div>
        <label>
          Your name: <input type="text" defaultValue={name} ref={node => (nameNode = node)} />
        </label>
        <div style={{marginTop: 10}}>
          <textarea
            style={{width: '100%', maxWidth: 400, minHeight: 100}}
            placeholder="Type your message and hit 'Enter'"
            onKeyDown={handleKeyDown}
          >
          </textarea>
        </div>
      </div>
    </div>
  )
  
  function handleKeyDown(event) {
    if (event.which === ENTER_KEY && !event.shiftKey) {
      event.preventDefault()
      if (event.target.value) {
        onSubmit({
          name: nameNode.value,
          message: event.target.value
        })
        event.target.value = ''
      }
    }
  }

  function updateScrollPosition(node) {
    if (!node) {
      return
    }
    const lastChildHeight = node.children[node.children.length - 1].offsetHeight
    const closeEnough = 200
    const isCloseToBottom = (node.scrollTop + closeEnough + lastChildHeight) > (node.scrollHeight - node.offsetHeight)
    if (isCloseToBottom) {
      node.scrollTop = node.scrollHeight
    }
  }
}

function Message({name, message}) {
  return (
    <div>
      <strong>{name}</strong>
      <Markdown className="markdown">{message}</Markdown>
    </div>
  )
}
