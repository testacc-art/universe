// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Lightbulb(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 18.5h4M10.5 5a4.5 4.5 0 012.001 8.532l-.001.968a2 2 0 11-4 0v-.968A4.5 4.5 0 0110.5 5z" />
      </g>
    </svg>
  );
}
