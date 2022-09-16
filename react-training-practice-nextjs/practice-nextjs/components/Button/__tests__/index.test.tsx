import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Button, ButtonProps } from '@components';
import { fireEvent, render } from '@testing-library/react';

describe('Test [Button] component', () => {
  const handleOnClickButton = jest.fn();
  const initButton = {
    onClick: handleOnClickButton,
    children: 'Create New Meetup',
    testId: 'test-button-id',
    className: 'shadow',
  };

  test('Component [Button] should render correctly with default value Props', () => {
    const component = renderer
      .create(<Button {...({} as ButtonProps)}></Button>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Button] should render correctly', () => {
    const component = renderer
      .create(<Button typeButton="button" {...initButton} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Button] call function handleOnClickButton when user click button', () => {
    const { getByTestId } = render(
      <Button typeButton="button" {...initButton} />,
    );
    const button = getByTestId('test-button-id');
    expect(button.textContent).toEqual('Create New Meetup');
    expect(button).toHaveProperty('type', 'button');
    fireEvent.click(button);
    expect(handleOnClickButton).toHaveBeenCalled();
  });
});
