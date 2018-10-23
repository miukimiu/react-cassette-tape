import React from "react";
import { tween, styler, easing } from "popmotion";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.buttonsRef = React.createRef();
    this.initialBtnPos = 0.68;
    this.activeBtnPos = 8;
  }

  componentDidMount() {
    const pauseIcon = styler(
      this.buttonsRef.current.querySelector("#pauseIcon")
    );

    pauseIcon.set("display", "none");
  }

  componentDidUpdate(prevProps) {
    const { isPlaying, isRecording } = this.props;

    const playIcon = styler(this.buttonsRef.current.querySelector("#playIcon"));
    const pauseIcon = styler(
      this.buttonsRef.current.querySelector("#pauseIcon")
    );
    const playPauseBtn = styler(
      this.buttonsRef.current.querySelector("#playPauseBtn")
    );
    const recBtn = styler(this.buttonsRef.current.querySelector("#recBtn"));
    const initialBtnPos = 0.68;
    const activeBtnPos = 8;

    if (isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        playIcon.set("display", "none");
        pauseIcon.set("display", "block");

        tween({
          from: `translate(169.344 ${initialBtnPos})`,
          to: `translate(169.344 ${activeBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(playPauseBtn.set("transform"));
      } else {
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

    if (isRecording !== prevProps.isRecording) {
      if (isRecording) {
        tween({
          from: `translate(0.344053 ${this.initialBtnPos})`,
          to: `translate(0.344053 ${this.activeBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(recBtn.set("transform"));
      } else {
        tween({
          from: `translate(0.344053 ${this.activeBtnPos})`,
          to: `translate(0.344053 ${this.initialBtnPos})`,
          duration: 400,
          ease: easing.linear
        }).start(recBtn.set("transform"));
      }
    }
  }

  prevTrack = () => {
    const { prevTrack } = this.props;
    const backwardBtn = this.buttonsRef.current.querySelector("#backwardBtn");

    tween({
      from: `translate(85.344 ${this.activeBtnPos})`,
      to: `translate(85.344 ${this.initialBtnPos})`,
      duration: 1000,
      ease: easing.linear,
      yoyo: 0
    }).start(styler(backwardBtn).set("transform"));

    prevTrack();
  };

  nextTrack = () => {
    const { nextTrack } = this.props;
    const forwardBtn = this.buttonsRef.current.querySelector("#forwardBtn");

    tween({
      from: `translate(253.344 ${this.activeBtnPos})`,
      to: `translate(253.344 ${this.initialBtnPos})`,
      duration: 1000,
      ease: easing.linear,
      yoyo: 0
    }).start(styler(forwardBtn).set("transform"));

    nextTrack();
  };

  render() {
    const { play, record } = this.props;

    return (
      <g
        id="buttons"
        transform="translate(134.656 285.32)"
        ref={this.buttonsRef}
      >
        <g
          id="forwardBtn"
          transform="translate(253.344 .68)"
          onClick={this.nextTrack}
        >
          <rect width="78.689" height="94.861" fill="#2F3B46" rx={1} />
          <g fill="#171D22" transform="translate(8.197 62.786)">
            <rect width="61.94" height="5.991" y="18.426" fillOpacity=".5" />
            <rect width="61.94" height="5.991" y="9.69" fillOpacity=".4" />
            <rect width="61.94" height="5.991" y=".954" fillOpacity=".3" />
          </g>
          <g id="skip-forward" fill="#D8D8D8" transform="translate(27 20)">
            <path d="M23.2409626,0 L22.7367376,0 C22.3196626,0 21.9772876,0.311250001 21.9772876,0.728325003 L21.9772876,7.79370003 L10.3303125,0.168075001 C10.1746875,0.0622500002 10.0128375,0.0249000001 9.82608754,0.0249000001 C9.30941254,0.0249000001 8.86743753,0.460650002 8.86743753,1.08315 L8.86743753,5.01112502 L1.49081251,0.143175001 C1.3351875,0.0373500001 1.1733375,0 0.986587504,0 C0.469912502,0 0.0590625,0.460650002 0.0590625,1.08315 L0.0590625,18.8866501 C0.0590625,19.5091501 0.476137502,19.9137751 0.992812504,19.9137751 C1.1857875,19.9137751 1.3289625,19.8390751 1.50326251,19.7332501 L8.86743753,14.9026501 L8.86743753,18.8866501 C8.86743753,19.5091501 9.31563754,19.9137751 9.83231254,19.9137751 C10.0252875,19.9137751 10.1746875,19.8390751 10.3427625,19.7332501 L21.9772876,12.1263 L21.9772876,19.1605501 C21.9772876,19.5776251 22.3134376,19.9200001 22.7367376,19.9200001 L23.2409626,19.9200001 C23.6580376,19.9200001 23.9692876,19.5776251 23.9692876,19.1605501 L23.9692876,0.728325003 C23.9692876,0.311250001 23.6642626,0 23.2409626,0 L23.2409626,0 Z" />
          </g>
        </g>
        <g id="playPauseBtn" transform="translate(169.344 .68)" onClick={play}>
          <rect width="78.689" height="94.861" fill="#2F3B46" rx={1} />
          <g fill="#171D22" transform="translate(8.197 62.786)">
            <rect width="62.295" height="5.858" y="18.04" fillOpacity=".5" />
            <rect width="62.295" height="5.858" y="9.497" fillOpacity=".4" />
            <rect width="62.295" height="5.858" y=".955" fillOpacity=".3" />
          </g>
          <g id="playIcon" fill="#36C77C" transform="translate(30.573 20.02)">
            <path d="M16.6657842,9.94403291 L1.46683868,1.09447922 C0.842652008,0.732308874 0.0624186672,1.18895844 0.0624186672,1.91329914 L0.0624186672,19.6281531 C0.0624186672,20.3524937 0.842652008,20.8091433 1.46683868,20.446973 L16.6657842,11.5974193 C17.2899708,11.2195024 17.2899708,10.3062033 16.6657842,9.94403291 L16.6657842,9.94403291 L16.6657842,9.94403291 L16.6657842,9.94403291 L16.6657842,9.94403291 Z" />
          </g>
          <g id="pauseIcon" fill="#D8D8D8" transform="translate(29 20)">
            <path d="M19.0333333 19.984C19.5833333 19.984 20.0333333 19.552 20.0333333 19.024L20.0333333 1.024C20.0333333.496 19.5833333.064 19.0333333.064L13.0333333.064C12.4833333.064 12.0333333.496 12.0333333 1.024L12.0333333 19.024C12.0333333 19.552 12.4833333 19.984 13.0333333 19.984L19.0333333 19.984 19.0333333 19.984 19.0333333 19.984zM7 19.984C7.55 19.984 8 19.552 8 19.024L8 1.024C8 .496 7.55.064 7 .064L1 .064C.45.064 0 .496 0 1.024L0 19.024C0 19.552.45 19.984 1 19.984L7 19.984 7 19.984 7 19.984z" />
          </g>
        </g>
        <g
          id="backwardBtn"
          transform="translate(84.344 .68)"
          onClick={this.prevTrack}
        >
          <rect width="78.689" height="94.861" fill="#2F3B46" rx={1} />
          <g id="skip-backward" fill="#D8D8D8" transform="translate(27 20)">
            <path d="M0.716990647,0 L1.21336879,0 C1.62395318,0 1.96100006,0.30640626 1.96100006,0.716990647 L1.96100006,7.67241274 L13.4267223,0.16545938 C13.5799254,0.0612812519 13.7392567,0.0245125008 13.9231004,0.0245125008 C14.4317348,0.0245125008 14.8668317,0.453481264 14.8668317,1.06629378 L14.8668317,4.93314078 L22.1286601,0.140946879 C22.2818632,0.0367687511 22.4350663,0 22.6250382,0 C23.1336726,0 23.5381289,0.453481264 23.5381289,1.06629378 L23.5381289,18.5927318 C23.5381289,19.2055443 23.1275445,19.6038725 22.6189101,19.6038725 C22.4289382,19.6038725 22.2879913,19.530335 22.1164038,19.4261569 L14.8668317,14.6707317 L14.8668317,18.5927318 C14.8668317,19.2055443 14.4256067,19.6038725 13.9169723,19.6038725 C13.7270004,19.6038725 13.5799254,19.530335 13.414466,19.4261569 L1.96100006,11.9375879 L1.96100006,18.8623693 C1.96100006,19.2729537 1.6300813,19.6100006 1.21336879,19.6100006 L0.716990647,19.6100006 C0.30640626,19.6100006 -5.68434189e-13,19.2729537 -5.68434189e-13,18.8623693 L-5.68434189e-13,0.716990647 C-5.68434189e-13,0.30640626 0.300278134,0 0.716990647,0 L0.716990647,0 Z" />
          </g>
          <g fill="#171D22" transform="translate(8.197 62.786)">
            <rect width="62.295" height="5.858" y="18.04" fillOpacity=".5" />
            <rect width="62.295" height="5.858" y="9.497" fillOpacity=".4" />
            <rect width="62.295" height="5.858" y=".955" fillOpacity=".3" />
          </g>
        </g>
        <g id="recBtn" transform="translate(.344 .68)" onClick={record}>
          <g>
            <g id="path-1-link" fill="#E83B4E">
              <rect id="path-1" width="78.689" height="94.861" rx={1} />
            </g>
            <rect id="path-1" width="78.689" height="94.861" rx={1} />
          </g>
          <g fill="#171D22" transform="translate(8.197 62.786)">
            <rect width="62.295" height="5.858" y="18.04" fillOpacity=".5" />
            <rect width="62.295" height="5.858" y="9.497" fillOpacity=".4" />
            <rect width="62.295" height="5.858" y=".955" fillOpacity=".3" />
          </g>
          <ellipse
            id="Oval-1"
            cx="40.125"
            cy="32.675"
            fill="#492028"
            rx="11.463"
            ry="11.656"
          />
        </g>
      </g>
    );
  }
}

export default Buttons;
