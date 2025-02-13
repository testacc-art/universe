// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function ZoomOut(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <circle cx={5.5} cy={5.5} r={5} />
        <path d="M7.5 5.5h-4zM14.571 14.5l-5.45-5.381" />
      </g>
    </svg>
  );
}
