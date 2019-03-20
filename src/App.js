import React, { Component } from "react";
import CassetteTape from "./components/CassetteTape";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

${styledNormalize};

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  background: #19ca90;
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <CassetteTape vizColor="#19ca90" />
      </div>
    );
  }
}

export default App;
