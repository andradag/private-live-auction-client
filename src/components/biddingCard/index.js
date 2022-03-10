import "./style.css";
import { useFormControl } from "@mui/material/FormControl";
import { FormControl } from "@mui/material/FormControl";
import {
  Typography,
  AppBar,
  // Toolbar,
  TextField,
  Button,
  // Box,
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

export const BiddingCard = () => {
  const styles = {};

  return (
    <div className="App">
      <AppBar></AppBar>

      <form>
        <TextField
          style={{ width: "200px", margin: "10px", mt: "30px" }}
          type="text"
          label="Title "
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="input"
          label="Description"
          Variant="outlined"
        />
        <br />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
        />
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
            Upload
          </Button>
        </label>
        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
  );
};
