// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Door(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(4 3)">
        <path
          d="M2.5.5h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-10a2 2 0 012-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.202 14.5l-3.645-1.948A2 2 0 015.5 10.788V4.212a2 2 0 011.057-1.764L10.202.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={7.5} cy={7.5} fill="currentColor" r={1} />
      </g>
    </svg>
  );
}
