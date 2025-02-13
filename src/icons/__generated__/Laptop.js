// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Laptop(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.5 4.485h11a1 1 0 011 1V13.5h-13V5.485a1 1 0 011-1zM3.118 17.5h13.764a1 1 0 00.894-1.447L16.5 13.5h-13l-1.276 2.553a1 1 0 00.894 1.447z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
