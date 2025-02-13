// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Cart(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M5 6.5h12.5l-1.586 5.55a2 2 0 01-1.923 1.45h-6.7a2 2 0 01-1.989-1.78L4.5 4.5h-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="currentColor" transform="translate(2 4)">
          <circle cx={5} cy={12} r={1} />
          <circle cx={13} cy={12} r={1} />
        </g>
      </g>
    </svg>
  );
}
