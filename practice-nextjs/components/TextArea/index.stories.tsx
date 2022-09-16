import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '@components';

export default {
  title: 'Meetup/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  label: 'Agenda',
  id: 'sample',
};
