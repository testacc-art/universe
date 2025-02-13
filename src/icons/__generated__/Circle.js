// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Circle(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={10.5}
        cy={10.5}
        fill="none"
        r={8}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
