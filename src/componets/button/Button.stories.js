import React from 'react';

import { Button } from './Button';

export default {
  title: 'Asignatura/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  complete: true,
  label: 'primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'comenzar',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
