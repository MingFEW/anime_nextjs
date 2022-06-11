import React, { FunctionComponent, useState } from 'react';

import { Input } from '@components/ui/input';
import { SortAscIcon } from '@components/icons';

const Filter: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <div className="flex flex-row items-center py-12">
      <Input value={searchText} className="mr-6 flex-1" placeholder="Type the title ... [ENTER to find]" />

      <div className="flex items-center">
        <div className="mr-3 text-xs md:text-sm lg:text-base">Sort by Time</div>
        <SortAscIcon />
      </div>
    </div>
  );
};

export default React.memo(Filter);
