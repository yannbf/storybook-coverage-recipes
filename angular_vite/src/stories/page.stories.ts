import { StoryFn, Meta } from '@storybook/angular'
import { within, userEvent } from '@storybook/testing-library'

import Page from './page.component'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<Page> = (args: Page) => ({
  props: args,
})

export const LoggedOut = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = Template.bind({})
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByRole('button', { name: /Log in/i })
  await userEvent.click(loginButton)
}
