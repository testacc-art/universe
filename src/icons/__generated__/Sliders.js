// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Sliders(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 9V2.5M14.5 18.5V14" />
        <circle cx={14.5} cy={11.5} r={2.5} />
        <path d="M6.5 5V2.5M6.5 18.5V10" />
        <circle cx={6.5} cy={7.5} r={2.5} />
      </g>
    </svg>
  );
}
