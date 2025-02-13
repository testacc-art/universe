// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Settings(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path
          d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 01-.017 1.948l-1.539.508a5.567 5.567 0 01-.536 1.26l.704 1.46a7.041 7.041 0 01-1.389 1.365l-1.447-.73c-.396.221-.822.395-1.27.514l-.533 1.53a7.066 7.066 0 01-1.948-.017l-.508-1.539a5.567 5.567 0 01-1.26-.536l-1.46.704a7.041 7.041 0 01-1.365-1.389l.73-1.447a5.565 5.565 0 01-.514-1.27l-1.53-.534a7.066 7.066 0 01.017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 011.389-1.365l1.447.73c.396-.221.822-.395 1.27-.514l.534-1.53C6.886.52 7.191.5 7.5.5z"
          strokeWidth={0.933}
        />
        <circle cx={7.5} cy={7.5} r={3} />
      </g>
    </svg>
  );
}
