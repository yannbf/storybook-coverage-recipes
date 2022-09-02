import type { StoryFn, Meta } from '@storybook/angular'

import Header from './header.component'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<Header> = (args: Header) => ({
  props: args,
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
