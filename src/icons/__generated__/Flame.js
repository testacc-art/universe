// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Flame(props: {}): Node {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 19c3.038 0 5.5-2.429 5.5-6.714C16 9.429 14.167 6.333 10.5 3 6.833 6.333 5 9.429 5 12.286 5 16.57 7.462 19 10.5 19z" />
        <path d="M10.5 19c1.519 0 2.75-1.214 2.75-3.357 0-1.429-.917-2.976-2.75-4.643-1.833 1.667-2.75 3.214-2.75 4.643C7.75 17.786 8.981 19 10.5 19z" />
      </g>
    </svg>
  );
}
