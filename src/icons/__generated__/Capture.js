// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Capture(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.5 7.5V4.494a2 2 0 00-1.994-2L13.5 2.485m5 11.015v3a2 2 0 01-2 2h-3m-6-16.015l-3.006.01a2 2 0 00-1.994 2V7.5m5 11h-3a2 2 0 01-2-2v-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
