// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function FaceHappy(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <circle
          cx={8.5}
          cy={8.5}
          r={8}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={6} cy={6} fill="currentColor" r={1} />
        <circle cx={11} cy={6} fill="currentColor" r={1} />
        <path
          d="M5.5 9.5c.603 1.333 1.603 2 3 2s2.397-.667 3-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
