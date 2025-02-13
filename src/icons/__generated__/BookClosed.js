// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function BookClosed(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 3.5h9a1 1 0 011 1v12a1 1 0 01-1 1h-9a2 2 0 01-2-2v-10a2 2 0 012-2z" />
        <path d="M6.5 13.5h10v3a1 1 0 01-1 1h-9a2 2 0 110-4z" />
      </g>
    </svg>
  );
}
