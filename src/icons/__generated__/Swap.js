// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Swap(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 8h5V3" />
        <path d="M18 8c-2.837-3.333-5.67-5-8.5-5S4.17 4 2 6" />
        <g>
          <path d="M6.5 11.5h-5v5" />
          <path d="M1.5 11.5c2.837 3.333 5.67 5 8.5 5s5.33-1 7.5-3" />
        </g>
      </g>
    </svg>
  );
}
