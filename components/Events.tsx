import * as React from 'react';

const Click = () => {
  const [count, setCount] = React.useState(0);
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
