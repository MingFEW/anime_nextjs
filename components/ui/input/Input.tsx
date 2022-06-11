import React, { FunctionComponent, HTMLProps } from 'react';

export type InputProps = HTMLProps<HTMLInputElement>;

const Input: FunctionComponent<InputProps> = ({ className, ...props }) => (
  <input className={`${className || ''} border-grey p-4`} {...props} />
);

export default React.memo(Input);
