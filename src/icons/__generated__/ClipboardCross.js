// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function ClipboardCross(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 4.5h-2a1 1 0 00-1 1v11a1 1 0 001 1h10a1 1 0 001-1v-11a1 1 0 00-1-1h-2" />
        <path d="M8.5 3.5h4a1 1 0 110 2h-4a1 1 0 110-2zM7.5 8.5l6 6M13.5 8.5l-6 6" />
      </g>
    </svg>
  );
}
