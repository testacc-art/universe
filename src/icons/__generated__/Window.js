// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Window(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 3.5h10a2 2 0 012 2v10a2 2 0 01-2 2h-10a2 2 0 01-2-2v-10a2 2 0 012-2z" />
        <path
          d="M5.5 5.5h10a2 2 0 012 2v-2c0-1-.895-2-2-2h-10c-1.105 0-2 1-2 2v2a2 2 0 012-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
