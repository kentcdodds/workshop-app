import React, {PropTypes} from 'react'
import marked from 'marked'
import stripIndent from 'strip-indent'

marked.setOptions({sanitize: true})

export default Markdown

function Markdown({children, style, noPTag = false, ...otherProps}) {
  let html = marked(stripIndent(children))
  if (noPTag) {
    html = html.slice(3, -5)
  }
  return (
    <div
      style={style}
      dangerouslySetInnerHTML={({__html: html})}
      {...otherProps}
    />
  )
}
Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  noPTag: PropTypes.bool,
  style: PropTypes.object,
}
