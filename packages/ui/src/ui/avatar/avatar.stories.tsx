import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg', 'xl'],
    },
  },
  args: {
    size: 'xl',
  },
} satisfies Meta<typeof Avatar.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Avatar.Root {...props}>
        <Avatar.Fallback>DG</Avatar.Fallback>
        <Avatar.Image
          src="https://pbs.twimg.com/profile_images/1689351221419606017/zcXbryh2_400x400.jpg"
          alt=""
        />
      </Avatar.Root>
    )
  },
}
