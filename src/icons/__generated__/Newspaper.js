// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Newspaper(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 7.165h9M5.481 10.203l1-.018a1 1 0 011.01.864l.009.135v.984a1 1 0 01-.981 1l-1 .018a1 1 0 01-1.01-.864l-.009-.136v-.983a1 1 0 01.981-1z" />
        <path d="M3.5 4.15h11a2 2 0 012 2v10.015h-13a2 2 0 01-2-2V6.151a2 2 0 012-2zM9.5 10.165h4M9.5 13.165h4" />
        <path d="M16 16.165a2.5 2.5 0 002.5-2.5v-6.5h-2" />
      </g>
    </svg>
  );
}
