// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function CreditCard(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M4.5 5.5h12a2 2 0 012 2v7a2 2 0 01-2 2h-12a2 2 0 01-2-2v-7a2 2 0 012-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2 9h17v2H2z" fill="currentColor" />
      </g>
    </svg>
  );
}
