import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MeetupForm } from '@components';

export default {
  title: 'Meetup/MeetupForm',
  component: MeetupForm,
} as ComponentMeta<typeof MeetupForm>;

const Template: ComponentStory<typeof MeetupForm> = () => <MeetupForm />;

export const Sample = Template.bind({});
