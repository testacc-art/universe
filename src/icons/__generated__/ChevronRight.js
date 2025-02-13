// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function ChevronRight(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.5 14.5l4-4-4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
