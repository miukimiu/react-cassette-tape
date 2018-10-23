import React, { Component } from "react";
import CassetteTape from "./components/CassetteTape";
import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

${styledNormalize}

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
        <CassetteTape />
      </div>
    );
  }
}

export default App;
