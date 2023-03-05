import React from "react";
import "./SettingsHead.css";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function SettingsHead() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="settingsHead">
      <h6>Quick settings</h6>
      <div className="settingsHead__density">
        <p className="setting_title">Density</p>
        <FormControl component="fieldset">
          <RadioGroup aria-label="density" name="default" value={value} onChange={handleChange}>
            <FormControlLabel value="default" control={<Radio color="primary" size="small" />} label="Default" />
            <FormControlLabel
              value="comfortable"
              control={<Radio color="primary" size="small" />}
              label="Comfortable"
            />
            <FormControlLabel value="compact" control={<Radio color="primary" size="small" />} label="Compact" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="settingsHead__theme">
        <p className="setting_title">Theme</p>
      </div>
      <div className="settingsHead__inboxType">
        <p className="setting_title">Inbox type</p>
      </div>
      <div className="settingsHead__mailThreading">
        <p className="setting_title">Email threading</p>
      </div>
    </div>
  );
}

export default SettingsHead;
