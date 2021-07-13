import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
//import { theme } from "../../utils/theme/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "Poppins-SemiBold"
    }
});

function CustomizedInputs() {

  return (
<MuiThemeProvider theme={THEME}>
    <TextField
      fullWidth
      id="standard-basic"
      name="name"
      label="Name"
    />
    </MuiThemeProvider>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CustomizedInputs;
