import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;
  overflow-x: hidden;
  background: ${props => props.vizColor};

  #defaultCanvas0 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  svg {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    margin-top: -40px;
  }

  #white-bg-buttons {
    fill: #19ca90;
  }
`;

export default Wrapper;
