import React from "react";

class CassetteAudio extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
    this.audio = new Audio();
    this.dir = "audio/";
    this.ext = ".mp3";
  }

  componentDidMount() {
    const { cassetteReady, titleUpdate } = this.props;

    if (cassetteReady) {
      titleUpdate();
    }
  }

  componentDidUpdate(prevProps) {
    const { playState, playlist, currentTrack, titleUpdate } = this.props;

    this.audio.src = this.dir + playlist[currentTrack] + this.ext;

    if (playState) {
      this.audio.play();
    } else {
      this.audio.pause();
    }

    titleUpdate();
  }

  render() {
    return null;
  }
}

export default CassetteAudio;
