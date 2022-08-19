import * as React from 'react';

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (headerRef.current !== null) {
      console.log(headerRef.current);
    }
  });

  return <div ref={headerRef}>hello world</div>;
};

<Header />;
