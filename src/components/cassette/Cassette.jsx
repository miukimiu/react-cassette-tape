import React from "react";

const Cassette = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={600}
    height={399}
    viewBox="0 0 600 399"
  >
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-60 -43)">
        <g id="cassette" transform="translate(59 43)">
          <g id="Page-1">
            <g id="cassette">{children}</g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Cassette;
