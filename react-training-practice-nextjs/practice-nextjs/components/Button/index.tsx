import { VARIANTS } from '@enums';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: VARIANTS;
  // TODO: #152
  className?: string;
  testId?: string;
  typeButton?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
};

export const Button = ({
  variant = VARIANTS.PRIMARY,
  onClick,
  children,
  className = '',
  testId,
  typeButton = 'button',
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      data-testid={testId}
      type={typeButton}
      onClick={onClick}
      className={`bg-${variant}-500 hover:bg-${variant}-400 text-white font-bold py-2 px-4 border-b-4 border-${variant}-700 hover:border-${variant}-500 rounded ${className}`}
    >
      {children}
    </button>
  );
};
