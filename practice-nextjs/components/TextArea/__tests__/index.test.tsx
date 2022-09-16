import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextArea, TextAreaProps } from '@components';

describe('Test [TextArea] component', () => {
  const handleOnChange = jest.fn();

  const initialProps = {
    id: 'overview',
    label: 'Overview',
    name: 'overview',
    type: 'text',
    errorMessage: 'error',
    placeholder: 'Please enter Overview.',
    value: 'Overview',
    onChange: handleOnChange,
  };

  test('Component [TextArea] with default value', () => {
    const component = renderer
      .create(<TextArea {...({} as TextAreaProps)} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [TextArea] matches DOM Snapshot', () => {
    const component = renderer.create(<TextArea {...initialProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [TextArea] should call handleOnChange function when user enter value', () => {
    render(<TextArea {...initialProps} />);
    fireEvent.change(screen.getByPlaceholderText('Please enter Overview.'), {
      target: { value: 'Test TextArea' },
    });
    expect(handleOnChange).toHaveBeenCalled();
  });
});
