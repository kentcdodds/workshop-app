import React from 'react'
import {action} from '@kadira/storybook'
import StateSetter from '../state-setter'
import Feedback from './index'

export default {
  name: 'Feedback',
  main() {
    return (
      <div>
        <StateSetter initialState={{
          name: 'Kent',
          email: 'kent@mailinator.com',
          recommended: '3',
          goodComments: 'Stuff',
          improvementComments: 'Other stuff',
        }}>
          {(state, setState) => (
            <Feedback
              {...state}
              onSubmit={values => {
                setState(values)
                alert(JSON.stringify(values, null, 2))
              }}
            />
          )}
        </StateSetter>
      </div>
    )
  }
}
