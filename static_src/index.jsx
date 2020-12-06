import React from "react";
import ReactDOM from "react-dom";
import MessageField from "./components/MessageField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <MuiThemeProvider>
    <MessageField />
  </MuiThemeProvider>,
  document.getElementById("root")
);
