import React from "react";
import {
  Background,
  Buttons,
  Cassette,
  Center,
  Timebox,
  TrackTitle
} from "./cassette/index";
import AudioVisualization from "./AudioVisualization";
import AudioRecorder from "./recorder/audio-recorder";
import AudioWaves from "./AudioWaves";
import Wrapper from "./Wrapper";

class CassetteTape extends React.Component {
  constructor() {
    super();

    this.state = {
      isRecording: false,
      isPlaying: false,
      currentTrack: 0,
      cassetteReady: false,
      playlist: ["dirty_south_loop_85bpm", "pop_hiphop_loop_100bpm"],
      recordingUrls: []
    };

    this.casseteRef = React.createRef();
    this.recorder = new AudioRecorder();
    this.audio = new Audio();
    this.dir = "audio/";
    this.ext = ".mp3";
  }

  componentDidUpdate(prevProps, prevState) {
    const { isPlaying, playlist, currentTrack } = this.state;

    this.audio.src = this.dir + playlist[currentTrack] + this.ext;

    if (isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  play = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  };

  record = () => {
    this.recorder.record();

    this.setState(prevState => ({
      isRecording: !prevState.isRecording
    }));
  };

  stopRecording = () => {
    this.recorder.stop().then(recordingUrls => {
      this.setState({ recordingUrls, isRecording: false });
    });
  };

  prevTrack = () => {
    if (this.state.currentTrack > 0) {
      this.setState(prevState => ({
        currentTrack: prevState.currentTrack - 1
      }));
    } else {
      this.setState({
        currentTrack: this.state.playlist.length - 1
      });
    }
  };

  nextTrack = () => {
    if (this.state.currentTrack === this.state.playlist.length - 1) {
      this.setState({
        currentTrack: 0
      });
    } else {
      this.setState(prevState => ({
        currentTrack: prevState.currentTrack + 1
      }));
    }
  };

  render() {
    const {
      currentTrack,
      isPlaying,
      isRecording,
      playlist,
      recordingUrls
    } = this.state;

    return (
      <Wrapper innerRef={this.casseteRef} className="cassette-wrapper">
        <Cassette>
          <Center isPlaying={isPlaying} isRecording={isRecording} />
          <Timebox />
          <TrackTitle title={playlist[currentTrack]} />
          <Background />
          <Buttons
            play={this.play}
            record={this.record}
            stopRecording={this.stopRecording}
            isPlaying={isPlaying}
            isRecording={isRecording}
            prevTrack={this.prevTrack}
            nextTrack={this.nextTrack}
          />
        </Cassette>
        <AudioVisualization />
        <AudioWaves recordingUrls={recordingUrls} />
      </Wrapper>
    );
  }
}

export default CassetteTape;
