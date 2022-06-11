import React, { FunctionComponent, useEffect, useState } from 'react';
import { SortAscIcon, SortDescIcon } from '@components/icons';

export type Props = {
  onClickSort(type: 'asc' | 'desc'): void;
  onFilter(queryStr: string): void;
};

const Filter: FunctionComponent<Props> = ({ onClickSort, onFilter }) => {
  const [queryStr, setQueryStr] = useState<string>('');
  const [sortDir, setSortDir] = useState<boolean>(false); // asc | desc

  useEffect(() => {
    onClickSort(sortDir ? 'desc' : 'asc');
  }, [sortDir]);

  const onKeyPress = (event: { keyCode: number; which: number }) => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      onFilter(queryStr.trim());
    }
  };

  return (
    <div className="flex flex-row items-center py-12">
      <input
        value={queryStr}
        className="mr-6 flex-1 border-grey p-4"
        onKeyPress={onKeyPress}
        onChange={e => {
          setQueryStr(e.target.value);
        }}
        placeholder="Type the title ... [ENTER to find]"
      />

      <div
        className="flex items-center"
        onClick={() => {
          setSortDir(!sortDir);
        }}
      >
        <div className="mr-3 text-xs md:text-sm lg:text-base">Sort by Time</div>
        {sortDir ? <SortDescIcon /> : <SortAscIcon />}
      </div>
    </div>
  );
};

export default React.memo(Filter);
