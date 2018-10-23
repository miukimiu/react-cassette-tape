import React from "react";
import { tween, styler, easing } from "popmotion";

class Center extends React.Component {
  constructor(props) {
    super(props);

    this.centerRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { isPlaying, isRecording } = this.props;

    if (isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        this.wheelAnimation();
      } else {
        this.stopWheelAnimation();
      }
    }

    if (isRecording !== prevProps.isRecording) {
      if (isRecording & !isPlaying) {
        this.wheelAnimation();
      } else if (!isPlaying) {
        this.stopWheelAnimation();
      }
    }
  }

  wheelAnimation = () => {
    const wheelLeft = styler(
      this.centerRef.current.querySelector("#wheelLeft")
    );
    const wheelRight = styler(
      this.centerRef.current.querySelector("#wheelRight")
    );
    const tapeLeft = styler(this.centerRef.current.querySelector("#tapeLeft"));
    const tapeRight = styler(
      this.centerRef.current.querySelector("#tapeRight")
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

  render() {
    return (
      <g id="center" transform="translate(46.902 35.982)" ref={this.centerRef}>
        <rect
          id="center-light-gray"
          width="508.197"
          height="222.433"
          fill="#D8D8D8"
          rx={8}
        />
        <rect
          id="white-bg"
          width="251.367"
          height="62.71"
          x="129.622"
          y="99.045"
          fill="#FFF"
        />
        <g id="center-rounded" transform="translate(0 40)">
          <g id="tape" fill="#DB9845" transform="translate(43.71 .68)">
            <circle id="tapeLeft" cx="90.389" cy="90.338" r={90} />
            <circle id="tapeRight" cx="330.389" cy="90.338" r={90} />
          </g>
          <rect
            id="Rectangle-30"
            width={508}
            height={16}
            y="19.018"
            fill="#D8D8D8"
          />
          <rect
            id="Rectangle-31"
            width={508}
            height={32}
            y="150.509"
            fill="#D8D8D8"
            rx={11}
          />
          <path
            id="center-pink"
            fill="#E83B4D"
            d="M121.775381,35 L0,35 L0,151 L131.043319,151 C99.4456837,150.174648 74,124.25636 74,92.5101376 C74,63.9359067 94.614799,40.0831729 121.775381,35 L121.775381,35 Z M386.109358,35 L508,35 L508,151 L376.842076,151 C408.435993,150.174648 433.894247,124.25636 433.894247,92.5101376 C433.894247,63.9359067 413.269264,40.0831729 386.109358,35 L386.109358,35 Z"
          />
          <path
            id="Fill-49"
            fill="#171D22"
            d="M187.544558,59.8433279 L321.288991,59.8433279 L321.288991,121.503708 L187.544558,121.503708 L187.544558,59.8433279 L187.544558,59.8433279 L187.544558,59.8433279 L187.544558,59.8433279 Z M376.078167,34 L132.751042,34 C100.353134,34 74,60.2450746 74,92.5101376 C74,124.775201 100.353134,151.020276 132.751042,151.020276 L376.078167,151.020276 C408.471736,151.020276 434.837888,124.775201 434.837888,92.5101376 C434.837888,60.2450746 408.471736,34 376.078167,34 L376.078167,34 L376.078167,34 L376.078167,34 L376.078167,34 Z"
            opacity=".9"
          />
        </g>
        <g id="wheels" fill="#FFFDFD" transform="translate(104 101)">
          <path
            id="wheelRight"
            d="M257.722506,57.3066462 L260.619115,52.2970017 L255.178132,49.1680406 L252.314674,54.1156845 C248.398658,51.2181921 245.220262,47.4113583 243.086136,42.9886523 L248.361362,41.0707686 L246.218949,35.1848496 L240.972731,37.0861998 C240.417444,34.8169797 240.098361,32.4568253 240.098361,30.018137 C240.098361,27.5009146 240.438163,25.070493 241.026602,22.7351389 L246.218949,24.6199557 L248.361362,18.7299033 L243.177303,16.8533533 C245.328004,12.4761144 248.502256,8.71061427 252.405841,5.85032218 L255.178132,10.6367647 L260.619115,7.51193695 L257.821961,2.6841607 C261.592939,0.989478969 265.761735,0.018137 270.166736,0.018137 C270.796614,0.018137 271.409916,0.071870811 272.031505,0.113204512 L271.049393,5.67672063 L277.236285,6.75553022 L278.222541,1.14241366 C283.03779,2.47335883 287.359912,4.96164761 290.878111,8.29727726 L286.406808,12.0379772 L290.430566,16.8409532 L294.964028,13.0506528 C297.711456,17.0310882 299.51821,21.7100632 300.069353,26.7651748 L294.068939,26.7651748 L294.068939,33.0313638 L300.098361,33.0313638 C299.588657,38.115409 297.806766,42.8191841 295.075915,46.8368198 L290.430566,42.9555853 L286.406808,47.7626947 L291.010717,51.6149956 C287.480086,55.0043591 283.124813,57.5298482 278.272268,58.8814602 L277.236285,53.0410083 L271.049393,54.132218 L272.072945,59.9189361 C271.443067,59.9602698 270.809045,60.018137 270.166736,60.018137 C265.72444,60.018137 261.518348,59.0343949 257.722506,57.3066462 L257.722506,57.3066462 L257.722506,57.3066462 Z"
          />
          <path
            id="wheelLeft"
            d="M17.7225063,57.3066462 L20.6191152,52.2970017 L15.1781317,49.1680406 L12.3146743,54.1156846 C8.39865799,51.2181921 5.22026169,47.4113583 3.0861364,42.9886523 L8.36136259,41.0707686 L6.21894944,35.1848496 L0.972730775,37.0861998 C0.417443805,34.8169797 0.098361,32.4568254 0.098361,30.018137 C0.098361,27.5009146 0.438163475,25.070493 1.02660191,22.7351389 L6.21894944,24.6199557 L8.36136259,18.7299033 L3.17730292,16.8533533 C5.32800394,12.4761144 8.5022563,8.71061426 12.4058408,5.85032217 L15.1781317,10.6367647 L20.6191152,7.51193694 L17.8219607,2.68416069 C21.5929393,0.989478963 25.7617355,0.018137 30.1667359,0.018137 C30.7966136,0.018137 31.4099157,0.071870811 32.0315055,0.113204512 L31.0493935,5.67672063 L37.2362849,6.75553022 L38.2225408,1.14241366 C43.0377905,2.47335882 47.3599122,4.96164761 50.878111,8.29727726 L46.4068077,12.0379772 L50.4305662,16.8409532 L54.9640285,13.0506529 C57.7114558,17.0310882 59.5182104,21.7100632 60.0693535,26.7651748 L54.0689391,26.7651748 L54.0689391,33.0313638 L60.098361,33.0313638 C59.5886573,38.115409 57.8067663,42.8191841 55.0759147,46.8368198 L50.4305662,42.9555853 L46.4068077,47.7626947 L51.0107168,51.6149957 C47.4800862,55.0043591 43.1248131,57.5298482 38.272268,58.8814602 L37.2362849,53.0410083 L31.0493935,54.132218 L32.0729449,59.9189361 C31.4430671,59.9602698 30.8090454,60.018137 30.1667359,60.018137 C25.7244401,60.018137 21.5183486,59.0343949 17.7225063,57.3066462 L17.7225063,57.3066462 L17.7225063,57.3066462 Z"
          />
        </g>
        <g id="Label" transform="translate(19.067 15.61)">
          <rect
            id="label-bg"
            width="471.975"
            height="43.949"
            fill="#FFF"
            rx={4}
          />
          <g id="lines" stroke="#EFEFF0" transform="translate(15.287 13.376)">
            <path
              id="Line-2"
              d="M0.904032507,0.955414013 L442.071896,0.955414013"
            />
            <path
              id="Line-3"
              d="M0.904032507,18.1528662 L442.071896,18.1528662"
            />
          </g>
        </g>
      </g>
    );
  }
}

export default Center;
