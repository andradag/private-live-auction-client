import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormGroup from "@mui/material/FormGroup";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const type = ["Flat", "House"];
const amenities = ["Pool", "Gym", "Game Room", "Rooftop"];
const heating = ["Boilers", "Electric Heating", "Direct Vent Heating"];

export const HouseForm = () => {
  const [propertyType, setPropertyType] = React.useState([]);

  const handleAmenities = (event) => {
    const {
      target: { value },
    } = event;
    setPropertyType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [propertyAmenities, setAmenities] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAmenities(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [heatingType, setHeatingType] = React.useState([]);

  const handleHeating = (event) => {
    const {
      target: { value },
    } = event;
    setHeatingType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 4,
      mx: "auto",
      width: 700,
      border: "solid",
      mt: "30px",
    },

    loadingButton: { marginTop: 3, marginBottom: 2 },
    errorContainer: {
      marginTop: 2,
      color: "#d32f2f",
      textAlign: "center",
    },
  };

  return (
    <Box sx={styles.container}>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          House Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="country"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="city"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              fullWidth
              autoComplete="price"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="gardensize"
              name="gardensize"
              label="Garden Size"
              fullWidth
              autoComplete="gardensize"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bedrooms"
              name="bedrooms"
              label="Bedrooms"
              fullWidth
              autoComplete="bedrooms"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bathrooms"
              name="bathrooms"
              label="Bathrooms"
              fullWidth
              autoComplete="bathrooms"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="consummation"
              name="consummation"
              label="Energy Consummation"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <FormControl sx={{ mt: 3, ml: 3, width: 330 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Property Type
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={propertyType}
              onChange={handleChange}
              input={<OutlinedInput label="Property Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {type.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={propertyType.indexOf(type) > -1} />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 3, ml: 3, width: 330 }}>
            <InputLabel id="demo-multiple-checkbox-label">Amenities</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={propertyAmenities}
              onChange={handleAmenities}
              input={<OutlinedInput label="Property Amenities" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {amenities.map((amenities) => (
                <MenuItem key={amenities} value={amenities}>
                  <Checkbox
                    checked={propertyAmenities.indexOf(amenities) > -1}
                  />
                  <ListItemText primary={amenities} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mt: 3, ml: 3, width: 330 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Heating Type
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={heatingType}
              onChange={handleHeating}
              input={<OutlinedInput label="Heating Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {heating.map((heating) => (
                <MenuItem key={heating} value={heating}>
                  <Checkbox checked={propertyAmenities.indexOf(heating) > -1} />
                  <ListItemText primary={heating} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Detailed Description"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <FormGroup sx={{ mt: 3, ml: 2 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="EPC (energy performance certificate)"
            />
          </FormGroup>
          <FormGroup sx={{ mt: 3, ml: 2 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Leasehold"
            />
          </FormGroup>
          <br />

          <FormGroup sx={{ mt: 3, ml: 2 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Freehold"
            />
          </FormGroup>

          <LoadingButton
            loadingIndicator="Loading..."
            variant="contained"
            fullWidth
            type="submit"
            sx={styles.loadingButton}
          >
            Submit
          </LoadingButton>
        </Grid>
      </React.Fragment>
    </Box>
  );
};
