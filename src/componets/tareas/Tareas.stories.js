import React from 'react';

import { Tareas } from './Tareas';

export default {
  title: 'Asignatura/tareas',
  component: Tareas
};

const Template = (args) => <Tareas {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  complete: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'comenzar',
// };
