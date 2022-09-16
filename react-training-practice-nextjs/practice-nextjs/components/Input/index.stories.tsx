import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '@components';

export default {
  title: 'Meetup/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  label: 'Meetup Name',
  id: 'sample',
};
