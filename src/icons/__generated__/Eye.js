// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Eye(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 16c3.13 0 5.963-1.833 8.5-5.5C16.463 6.833 13.63 5 10.5 5S4.537 6.833 2 10.5c2.537 3.667 5.37 5.5 8.5 5.5z" />
        <path d="M10.5 7c.185 0 .366.014.543.042a2.5 2.5 0 002.915 2.916A3.5 3.5 0 1110.5 7z" />
      </g>
    </svg>
  );
}
