// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Browser(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.5 14.5v-9a2 2 0 00-2-2h-12a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2z" />
        <path d="M16.5 13.5v-3a1 1 0 00-1-1h-10a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1zM8.5 6.498h8M4.5 6.5h2" />
      </g>
    </svg>
  );
}
