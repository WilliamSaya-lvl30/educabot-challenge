import React from 'react'
import { Button } from './Button'

export default {
  title: 'Asignatura/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'comenzar'
}