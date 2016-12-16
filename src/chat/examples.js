import React from 'react'
import {action} from '@kadira/storybook'
import StateSetter from '../state-setter'
import Chat from './index'

export default {
  name: 'Chat',
  main() {
    return (
      <div>
        <StateSetter initialState={{
          name: 'Fred Mertz',
          messages: getMessages()
        }}>
          {(state, setState) => (
            <Chat
              {...state}
              onSubmit={values => {
                setState({
                  messages: [...state.messages, {
                    id: `messageId${Math.random()}`,
                    ...values,
                  }],
                })
              }}
            />
          )}
        </StateSetter>
      </div>
    )
  }
}

function getMessages() {
  return [
    {
      id: 'abc123',
      name: 'Joe Schmo',
      message: 'Stuff that is really interesting',
    },
    {
      id: '34jdk20',
      name: 'Fancy Fran',
      message: 'Other things that are coolio and `stuff`',
    },
    {
      id: '9skd023',
      name: 'Fancy Fran',
      message: 'This is `some code` here.',
    },
    {
      id: '903ld290fjv',
      name: 'Janice',
      message: 'But this is more stuff that is interesting...',
    },
    {
      id: 'dk203kfjd',
      name: 'XSS',
      message: 'stuff<script>console.log(window)</script>',
    },
  ]
}
