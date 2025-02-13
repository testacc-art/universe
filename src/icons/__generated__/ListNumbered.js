// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function ListNumbered(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.5 10.5h-7M15.5 14.5h-7M15.5 6.5h-7" />
        </g>
        <path
          d="M5.88 8V5.828h-.037l-.68.459V5.67l.717-.488h.717V8zM4.9 10.068c0-.572.45-.963 1.109-.963.652 0 1.04.354 1.04.836 0 .334-.148.555-.597.961l-.555.502v.037h1.186V12H4.94v-.479l1.008-.912c.348-.318.406-.44.406-.605 0-.195-.136-.358-.382-.358-.262 0-.416.178-.416.422zm.712 4.73v-.484h.362c.238 0 .392-.138.392-.341 0-.192-.146-.332-.388-.332-.254 0-.409.134-.42.363h-.653c.01-.541.438-.899 1.108-.899.66 0 1.021.346 1.02.766 0 .34-.22.565-.528.637v.037c.406.057.64.309.64.68 0 .504-.48.851-1.158.851-.67 0-1.125-.361-1.15-.916h.684c.01.217.185.352.457.352.261 0 .439-.143.439-.356 0-.222-.168-.357-.443-.357z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
