// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function SplitThree(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 5.5h-12a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2zM7.5 5.5v10M13.5 5.5v10" />
      </g>
    </svg>
  );
}
