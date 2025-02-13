// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Undo(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 13.5c3.333-4 6.333-6 9-6s5 1 7 3" />
        <path d="M2.5 8.5v5h5" />
      </g>
    </svg>
  );
}
