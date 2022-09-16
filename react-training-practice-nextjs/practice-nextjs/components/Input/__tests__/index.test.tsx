import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input, InputProps } from '@components';

describe('Test [Input] component', () => {
  const handleOnChange = jest.fn();

  const initialProps = {
    id: 'meetup-name',
    label: 'Meetup Name',
    name: 'meetup-name',
    type: 'text',
    errorMessage: 'error',
    placeholder: 'Please enter Meetup Name.',
    value: 'Meetup',
    onChange: handleOnChange,
  };

  test('Component [Input] with default value', () => {
    const component = renderer
      .create(<Input {...({} as InputProps)} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Input] matches DOM Snapshot', () => {
    const component = renderer.create(<Input {...initialProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Input] should call handleOnChange function when user enter value', () => {
    render(<Input {...initialProps} />);
    fireEvent.change(screen.getByPlaceholderText('Please enter Meetup Name.'), {
      target: { value: 'hi' },
    });
    expect(handleOnChange).toHaveBeenCalled();
  });
});
