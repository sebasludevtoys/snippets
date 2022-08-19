import * as React from 'react';

interface Props extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input = (props: InputProps) => {
  return <input {...props}>hello</input>;
};

<Button />;

<Input />;
