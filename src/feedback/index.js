import React, {PropTypes} from 'react'

export default Feedback

function Feedback({
  name,
  email,
  recommended,
  goodComments,
  improvementComments,
  onSubmit,
}) {
  const styles = {
    label: {marginBottom: 16, display: 'block'}
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{fontSize: '1.3em', marginBottom: 20}}>Exercise Feedback</div>
      <label style={styles.label}>
        <div>Your name</div>
        <input type="text" defaultValue={name} required />
      </label>
      <label style={styles.label}>
        <div>Your email</div>
        <input type="email" defaultValue={email} required />
      </label>
      <label style={styles.label}>
        <div>Would you recommend keeping this exercise?</div>
        No
        <input
          type="range"
          defaultValue={recommended}
          max={4}
          min={1}
          style={{marginLeft: 8, marginRight: 8}}
          required
        />
        Yes
      </label>
      <label style={styles.label}>
        <div>What went well?</div>
        <textarea defaultValue={goodComments} required></textarea>
      </label>
      <label style={styles.label}>
        <div>What could be improved?</div>
        <textarea defaultValue={improvementComments} required></textarea>
      </label>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const [
      name,
      email,
      recommended,
      goodComments,
      improvementComments,
    ] = Array.from(event.target.elements).map(i => i.value)

    onSubmit({
      name,
      email,
      recommended,
      goodComments,
      improvementComments,
    })
  }
}

Feedback.propTypes = {}
