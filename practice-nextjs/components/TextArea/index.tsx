import React, { RefObject } from 'react';

export type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
};

export const TextArea = ({
  id,
  name,
  label,
  onChange,
  placeholder = 'Please enter something.',
  errorMessage,
  value,
}: TextAreaProps): JSX.Element => {
  return (
    <div className="flex flex-col m-3">
      <div>
        <label htmlFor={id} className="block text-gray-700 text-md font-bold">
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="h-48 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          value={value}
        />
      </div>
      {errorMessage && (
        <small className="p-1 text-white text-md rounded bg-red-600">
          {errorMessage}
        </small>
      )}
    </div>
  );
};
