import { FunctionComponent } from 'react';

import Header from '@components/module/header/Header';

export const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-5">
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  );
};
