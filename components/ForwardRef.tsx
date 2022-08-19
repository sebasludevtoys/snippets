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

<Button />;
