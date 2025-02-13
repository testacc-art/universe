// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Printer(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" transform="rotate(-90 10.5 8.5)">
        <path
          d="M3.5 4.384V2.486a2 2 0 012-2h4a2 2 0 012 2V14.5a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 4.5h5.001v8H1.5a1 1 0 01-1-1v-6a1 1 0 011-1zm12 0h2a1 1 0 011 1v6a1 1 0 01-1 1h-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={9} cy={14} fill="currentColor" r={1} />
      </g>
    </svg>
  );
}
