import {configure, storiesOf, action, linkTo} from '@kadira/storybook'
import '../src/index.css'

configure(loadStories, module)

function loadStories() {
  const components = [
    require('../src/status/examples').default,
    require('../src/feedback/examples').default,
    require('../src/chat/examples').default,
  ]

  components.forEach(component => {
    const story = storiesOf(component.name, module)
    Object.keys(component).forEach(exampleName => {
      if (exampleName === 'name') {
        return
      }
      story.add(exampleName, component[exampleName])
    })
  })
}

