import React, { InputHTMLAttributes, RefObject } from 'react';

// TODO: #153
export type InputProps = {
  id: string;
  name: string;
  label: string;
  type: InputHTMLAttributes<HTMLElement>['type'];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
};

export const Input = ({
  id,
  name,
  label,
  type,
  onChange,
  placeholder = 'Please enter something.',
  errorMessage,
  value,
}: InputProps): JSX.Element => {
  return (
    <div className="flex flex-col m-3">
      <div>
        <label htmlFor={id} className="block text-gray-700 text-md font-bold">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          value={value}
        />
      </div>
      {errorMessage && (
        <small className="p-1 text-white text-md rounded bg-red-600 ">
          {errorMessage}
        </small>
      )}
    </div>
  );
};
