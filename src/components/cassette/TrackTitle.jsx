import React from "react";

const TrackTitle = ({ title }) => (
  <g
    id="tracktitlebox"
    fill="#E83B4D"
    fontFamily="Helvetica"
    fontSize={13}
    transform="translate(85 66)"
  >
    <g id="tracktitle">
      <text id="Song.mp3">
        <tspan x=".369" y={13}>
          {title}
          .mp3
        </tspan>
      </text>
    </g>
  </g>
);

export default TrackTitle;
