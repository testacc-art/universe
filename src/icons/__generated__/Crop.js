// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Crop(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 7.5h4v4M13.5 13.5v3M7.5 7.5H4" />
        <path d="M7.5 4.5v9h9" />
      </g>
    </svg>
  );
}
