// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Branch(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 8.5v-5h5" />
        <path d="M4.5 3.5l6 6v8M12.5 7.5l4-4" />
      </g>
    </svg>
  );
}
