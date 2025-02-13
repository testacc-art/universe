// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function BellRinging(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.585 15.5H5.415A1.65 1.65 0 014 13a10.526 10.526 0 001.5-5.415V6.5a4 4 0 014-4h2a4 4 0 014 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 01-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
