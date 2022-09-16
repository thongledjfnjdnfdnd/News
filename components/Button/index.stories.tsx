import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../';
import { VARIANTS } from '@enums';

export default {
  title: 'Meetup/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button Content',
  variant: VARIANTS.DANGER,
};
