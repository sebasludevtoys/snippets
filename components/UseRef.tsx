import * as React from 'react';

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (headerRef.current !== null) {
      console.log(headerRef.current);
    }
  });

  return <div ref={headerRef}>hello world</div>;
};

<Header />;
