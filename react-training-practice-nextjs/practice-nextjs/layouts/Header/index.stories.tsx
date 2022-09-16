import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Meetup/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
