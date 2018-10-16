import React from "react";
import { tween, styler, easing, action } from "popmotion";
import { ReactComponent as CassetteTapeSVG } from "../svg/cassette.svg";
import Recorder from "./Recorder";
import CassetteAudio from "./CassetteAudio";
import Wrapper from "./Wrapper";

class CassetteTape extends React.Component {
  constructor() {
    super();

    this.state = {
      recState: false,
      playState: false,
      currentTrack: 0,
      cassetteReady: false,
      playlist: ["dirty_south_loop_85bpm", "pop_hiphop_loop_100bpm"]
    };

    this.casseteRef = React.createRef();

    this.initialBtnPos = 0.68;
    this.activeBtnPos = 8;
  }

  componentDidMount() {
    const playPauseBtn = this.casseteRef.current.querySelector("#playPauseBtn");
    const recBtn = this.casseteRef.current.querySelector("#recBtn");
    const backwardBtn = this.casseteRef.current.querySelector("#backwardBtn");
    const forwardBtn = this.casseteRef.current.querySelector("#forwardBtn");
    const pauseIcon = styler(
      this.casseteRef.current.querySelector("#pauseIcon")
    );

    pauseIcon.set("display", "none");

    playPauseBtn.addEventListener("click", () => {
      this.setState(prevState => ({
        playState: !prevState.playState
      }));
    });

    recBtn.addEventListener("click", () => {
      this.setState(prevState => ({
        recState: !prevState.recState
      }));
    });

    backwardBtn.addEventListener("click", () => {
      console.log("this.activeBtnPos", this.activeBtnPos);

      tween({
        from: `translate(85.344 ${this.activeBtnPos})`,
        to: `translate(85.344 ${this.initialBtnPos})`,
        duration: 1000,
        ease: easing.linear,
        yoyo: 0
      }).start(styler(backwardBtn).set("transform"));

      if (this.state.currentTrack > 0) {
        this.setState(prevState => ({
          currentTrack: prevState.currentTrack - 1
        }));
      } else {
        this.setState({
          currentTrack: this.state.playlist.length - 1
        });
      }
    });

    forwardBtn.addEventListener("click", () => {
      tween({
        from: `translate(253.344 ${this.activeBtnPos})`,
        to: `translate(253.344 ${this.initialBtnPos})`,
        duration: 1000,
        ease: easing.linear,
        yoyo: 0
      }).start(styler(forwardBtn).set("transform"));

      if (this.state.currentTrack === this.state.playlist.length - 1) {
        this.setState({
          currentTrack: 0
        });
      } else {
        this.setState(prevState => ({
          currentTrack: prevState.currentTrack + 1
        }));
      }
    });

    this.setState({
      cassetteReady: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { playState, recState } = this.state;
    const playIcon = styler(this.casseteRef.current.querySelector("#playIcon"));
    const pauseIcon = styler(
      this.casseteRef.current.querySelector("#pauseIcon")
    );
    const playPauseBtn = styler(
      this.casseteRef.current.querySelector("#playPauseBtn")
    );
    const recBtn = styler(this.casseteRef.current.querySelector("#recBtn"));
    const initialBtnPos = 0.68;
    const activeBtnPos = 8;

    // if play state changes
    if (playState !== prevState.playState) {
      if (playState) {
        this.wheelAnimation();

        playIcon.set("display", "none");
        pauseIcon.set("display", "block");

        tween({
          from: `translate(169.344 ${initialBtnPos})`,
          to: `translate(169.344 ${activeBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(playPauseBtn.set("transform"));
      } else {
        this.stopWheelAnimation();
        playIcon.set("display", "block");
        pauseIcon.set("display", "none");

        tween({
          from: `translate(169.344 ${activeBtnPos})`,
          to: `translate(169.344 ${initialBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(playPauseBtn.set("transform"));
      }
    }

    if (recState !== prevState.recState) {
      if (recState) {
        this.wheelAnimation();

        tween({
          from: `translate(0.344053 ${initialBtnPos})`,
          to: `translate(0.344053 ${activeBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(recBtn.set("transform"));
      } else {
        this.stopWheelAnimation();

        tween({
          from: `translate(0.344053 ${activeBtnPos})`,
          to: `translate(0.344053 ${initialBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(recBtn.set("transform"));
      }
    }
  }

  wheelAnimation = () => {
    const wheelLeft = styler(
      this.casseteRef.current.querySelector("#wheelLeft")
    );
    const wheelRight = styler(
      this.casseteRef.current.querySelector("#wheelRight")
    );
    const tapeLeft = styler(this.casseteRef.current.querySelector("#tapeLeft"));
    const tapeRight = styler(
      this.casseteRef.current.querySelector("#tapeRight")
    );

    const animateWheelLeft = tween({
      from: { rotate: 0 },
      to: { rotate: -360 },
      duration: 3000,
      loop: Infinity,
      ease: easing.linear
    });

    const animateWheelRight = tween({
      from: { rotate: 0 },
      to: { rotate: -360 },
      duration: 3000,
      loop: Infinity,
      ease: easing.linear
    });

    const animateTapeLeft = tween({
      from: 90.3893,
      to: 92.3893,
      duration: 1000,
      loop: Infinity,
      ease: easing.linear
    });

    const animateTapelRight = tween({
      from: 330.389,
      to: 328.389,
      duration: 1000,
      loop: Infinity,
      ease: easing.linear
    });

    this.wheelLeftAnimation = animateWheelLeft.start(wheelLeft.set);
    this.wheelRightAnimation = animateWheelRight.start(wheelRight.set);
    this.tapeLeftAnimation = animateTapeLeft.start(tapeLeft.set("cx"));
    this.tapeRightAnimation = animateTapelRight.start(tapeRight.set("cx"));
  };

  stopWheelAnimation = () => {
    this.wheelLeftAnimation && this.wheelLeftAnimation.stop();
    this.wheelRightAnimation && this.wheelRightAnimation.stop();
    this.tapeLeftAnimation && this.tapeLeftAnimation.stop();
    this.tapeRightAnimation && this.tapeRightAnimation.stop();
  };

  titleUpdate = () => {
    const { playlist, currentTrack } = this.state;

    this.casseteRef.current.querySelector("#tracktitle tspan").innerHTML = `${
      playlist[currentTrack]
    }.mp3`;
  };

  onData(recordedBlob) {
    // console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    // console.log("recordedBlob is: ", recordedBlob);
  }

  render() {
    console.log("render", this.state);

    const { currentTrack, playState, playlist, cassetteReady } = this.state;

    return (
      <Wrapper innerRef={this.casseteRef}>
        <CassetteTapeSVG />
        <CassetteAudio
          currentTrack={currentTrack}
          playlist={playlist}
          playState={playState}
          titleUpdate={this.titleUpdate}
          cassetteReady={cassetteReady}
        />
        <Recorder
          record={this.state.recState}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
      </Wrapper>
    );
  }
}

export default CassetteTape;
