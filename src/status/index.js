import React, {PropTypes} from 'react'

export default Status

function Status({value, onChange}) {
  const values = {
    working: 'Working on it',
    help: 'Need help',
    finished: 'Finished',
  }
  return (
    <div>
      <div style={{fontSize: '1.3em'}}>Exercise Status</div>
      <RadioGroup
        value={value}
        values={values}
        onChange={onChange}
      />
    </div>
  )
}

Status.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

function RadioGroup({value, label, values, onChange}) {
  const randomName = `radio${Math.random()}`
  return (
    <div>
      {Object.keys(values).map(val => (
        <Radio
          key={val}
          label={values[val]}
          value={val}
          name={randomName}
          checked={value === val}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

function Radio({name, label, value, checked, onChange}) {
  return (
    <label style={{display: 'block', marginTop: 6, marginBottom: 6}}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        style={{marginRight: 10}}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  )
}
