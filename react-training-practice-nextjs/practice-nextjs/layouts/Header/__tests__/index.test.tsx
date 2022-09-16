import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Header } from '..';
import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Test [Header] component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/meetings/AddMeetup');
  });

  test('Component [Header] should render correctly', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Header] navigate to AddMeetup page when click button', () => {
    const { getByTestId } = render(<Header />);
    const button = getByTestId('add-button');
    fireEvent.click(button);
    expect(singletonRouter).toMatchObject({ asPath: '/meetings/AddMeetup' });
  });
});
