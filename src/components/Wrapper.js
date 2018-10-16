import styled, { keyframes } from "styled-components";

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const tapeMovingLeft = keyframes`
  from {
    cx: 90.3893;
  }
  to {
    cx: 92.3893;
  }
`;

const tapeMovingRight = keyframes`
  from {
    cx: 330.389;
  }
  to {
    cx: 328.389;
  }
`;

const Wrapper = styled.div`
  .removed {
    display: none;
  }
  .rotating {
    animation: ${rotating} 1s linear infinite;
  }
  .tape-moving-left {
    animation: ${tapeMovingLeft} 1s linear infinite;
  }
  .tape-moving-right {
    animation: ${tapeMovingRight} 1s linear infinite;
  }

  #playPauseBtn {
    &.active {
      transform: translate(169.344053px, ${props => props.btnActivePositon}px);
    }
  }
  #recBtn {
    .active {
      transform: translate(0.344053px, ${props => props.btnActivePositon}px);
    }
  }
  #forwardBtn {
    .active {
      transform: translate(0.344053px, ${props => props.btnActivePositon}px);
    }
  }
  #backwardBtn {
    .active {
      transform: translate(0.344053px, ${props => props.btnActivePositon}px);
    }
  }
`;

export default Wrapper;
