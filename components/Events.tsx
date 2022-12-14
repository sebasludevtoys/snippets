import * as React from 'react';

// for forms
type FormProps = {
  onSubmit: (n: number) => void;
};

// the as
type context = {
  name: string;
  lastName: string;
};
const appContext = React.createContext<context>({} as context);

const Click = () => {
  const [count, setCount] = React.useState<number>(0);
  const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };
  return (
    <div>
      <input value={count} onChange={changeCount} />
      <button>Click me</button>
    </div>
  );
};
