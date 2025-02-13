// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function LockOpen(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(4 1)">
        <path
          d="M2.5 8.5l-.006-1.995C2.487 2.502 3.822.5 6.5.5c2.191 0 3.61 1.32 4 4m-8 4h8.023a2 2 0 011.994 1.85l.006.156-.017 6a2 2 0 01-2 1.994H2.5a2 2 0 01-2-2v-6a2 2 0 012-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={6.5} cy={13.5} fill="currentColor" r={1.5} />
      </g>
    </svg>
  );
}
