// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Hand(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.25 9.25a1.532 1.532 0 011.723.934L7.5 11.5v-6a1 1 0 112 0V4a1 1 0 112 0v1a1 1 0 112 0v1.5a1 1 0 112 0v8a4 4 0 01-4 4c-2.35 0-4.4-1.6-4.97-3.88l-.03-.12-1.93-3.86a.974.974 0 01.68-1.39zM9.5 4.5v6M11.5 4.5v5M13.5 6.5v4" />
      </g>
    </svg>
  );
}
