import React from 'react'
import StateSetter from '../state-setter'
import Status from './index'

export default {
  name: 'Status',
  main() {
    return (
      <div>
        <StateSetter>
          {({value}, setState) => (
            <Status
              value={value}
              onChange={newValue => setState({value: newValue})}
            />
          )}
        </StateSetter>
      </div>
    )
  }
}
