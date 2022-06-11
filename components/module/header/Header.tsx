import React, { FunctionComponent } from 'react';

import { Logo } from '@components/icons';

const Header: FunctionComponent = () => {
  return (
    <header className="p-5">
      <div className="container mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default React.memo(Header);
