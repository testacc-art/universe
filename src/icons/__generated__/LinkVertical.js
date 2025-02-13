// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function LinkVertical(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 12.5v1a4 4 0 11-8 0v-1m0-4v-1a4 4 0 118 0v1M10.5 7.5v6" />
      </g>
    </svg>
  );
}
