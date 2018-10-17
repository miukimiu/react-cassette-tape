import React from "react";
import styled from "styled-components";

const WavesContainer = styled.div`
  position: relative;
  min-height: 200px;
  background: #19ca90;
  z-index: 100;
`;

const AudioPlayerContainer = styled.div`
  margin: 0 auto;
`;

class AudioWaves extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { recordingUrls } = this.props;

    const waves = recordingUrls.map(url => (
      <AudioPlayerContainer key={url}>
        <audio controls={true} src={url} />
      </AudioPlayerContainer>
    ));

    return (
      <WavesContainer>
        <h1>Ops</h1>
        {waves}
      </WavesContainer>
    );
  }
}

export default AudioWaves;
