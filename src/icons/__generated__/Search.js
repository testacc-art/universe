// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Search(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={8.5} cy={8.5} r={5} />
        <path d="M17.571 17.5L12 12" />
      </g>
    </svg>
  );
}
