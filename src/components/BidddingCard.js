import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { AppBar, TextField, Button } from "@material-ui/core";

// import MenuItem from "@mui/material/MenuItem";

export const BiddingCard = () => {
  const [category, option] = React.useState("");

  const handleChange = (event) => {
    option(event.target.value);
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 4,
      mx: "auto",
      width: 700,
    },
  };

  return (
    <Box component="form" sx={styles.form}>
      <TextField type="text" label="Title " variant="outlined" />

      <br />

      <TextField type="text" label="Description" Variant="outlined" />

      <br />

      <FormControl
        style={{
          width: "230px",
          margin: "5px",
          minWidth: 120,
          marginTop: "10px",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <InputLabel id="demo-simple-select-filled-label">
          Choose Category
        </InputLabel>

        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>

      <br />

      <TextField type="text" label="Reserve Amount" variant="outlined" />

      <br />

      <TextField type="text" label="Starting Bid" variant="outlined" />

      <br />

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span">
          Upload Image
        </Button>
      </label>

      <br />

      <Button variant="contained" color="primary">
        Save and continue
      </Button>
    </Box>
  );
};
