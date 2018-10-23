import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./visualization/sketch";
import debounce from "lodash/debounce";

class AudioVisualization extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: "0", height: "0" };

    this.initUpdateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateWindowDimensions = debounce(
      this.updateWindowDimensions.bind(this),
      200
    );
  }

  componentDidMount() {
    this.initUpdateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { width, height } = this.state;
    return (
      <P5Wrapper sketch={sketch} windowWidth={width} windowHeight={height} />
    );
  }
}

export default AudioVisualization;
