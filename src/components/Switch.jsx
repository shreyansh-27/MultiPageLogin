import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function SwitchButton(props) {
  return (
    <FormGroup className="flex items-center">
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Monthly</Typography>
        <Switch checked={props.state} onChange={props.handleToggle} />
        <Typography>Yearly</Typography>
      </Stack>
    </FormGroup>
  );
}
