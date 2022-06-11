/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent } from 'react';
import RcPagination from 'rc-pagination';
import localEN from './locale';

import { LeftArrowIcon, RightArrowIcon } from '@components/icons';

interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({ current, total, pageSize, onChange, ...rest }) => {
  return (
    <>
      <RcPagination
        className="pagination"
        locale={localEN}
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        prevIcon={<LeftArrowIcon />}
        nextIcon={<RightArrowIcon />}
        {...rest}
      />
    </>
  );
};

export default React.memo(Pagination);
