import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_HOUSE } from "../../../mutations";
import { useNavigate } from "react-router-dom";

const options = ["Semi-Detached", "Detached", "Terraced"];

export const HouseForm = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const { control } = useForm();

  const [executeCreateHouse, { loading, error }] = useMutation(CREATE_HOUSE);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({
    title,
    description,
    propertyType,
    reserveAmount,
    startingBid,
    bedrooms,
    bathrooms,
    googleMapUrl,
    keyFeatures,
    images,
  }) => {
    try {
      const { data } = await executeCreateHouse({
        variables: {
          input: {
            title,
            description,
            propertyType,
            reserveAmount: parseFloat(reserveAmount),
            startingBid: parseFloat(startingBid),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            googleMapUrl,
            keyFeatures,
            images,
          },
        },
      });

      console.log(data);

      if (data.addListing) {
        navigate("/dashboard", { replace: true });
      }

      if (data.addListing === null) {
        throw new ApolloError("Failed to create house, please try again later");
      }
    } catch (err) {
      console.log(err);
    }
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
    <Box
      sx={styles.container}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          House Form
        </Typography>
        <Grid container spacing={3}>
          {/* TITLE */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="title"
              variant="outlined"
              {...register("title", { required: true })}
              error={!!errors.title}
            />
          </Grid>
          {/* PROPERTY TYPE */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="propertyType"
              name="propertyType"
              label="propertyType"
              fullWidth
              autoComplete="propertyType"
              variant="outlined"
              {...register("propertyType", { required: true })}
              error={!!errors.propertyType}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="propertyType"
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  multiple
                  fullWidth
                  options={options}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Property Type"
                      margin="normal"
                      variant="outlined"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  onChange={(event, values, reason) => onChange(values)}
                  value={value || []}
                />
              )}
            />
          </Grid> */}
          {/* DESCRIPTION  */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="description"
              variant="outlined"
              {...register("description", { required: true })}
              error={!!errors.description}
            />
          </Grid>
          {/* PRICE */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="startingBid"
              name="startingBid"
              label="Starting Bid"
              fullWidth
              autoComplete="startingBid"
              variant="outlined"
              {...register("price", { required: true })}
              error={!!errors.price}
            />
          </Grid>
          {/* RESERVE AMOUNT */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="reserveAmount"
              name="reserveAmount"
              label="Reserve Amount"
              fullWidth
              autoComplete="reserveAmount"
              variant="outlined"
              {...register("reserveAmount", { required: true })}
              error={!!errors.reserveAmount}
            />
          </Grid>
          {/* STARTING BID */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="startingBid"
              name="startingBid"
              label="Starting Bid"
              fullWidth
              autoComplete="startingBid"
              variant="outlined"
              {...register("startingBid", { required: true })}
              error={!!errors.startingBid}
            />
          </Grid>
          {/* BEDROOMS */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bedrooms"
              name="bedrooms"
              label="Bedrooms"
              fullWidth
              autoComplete="bedrooms"
              variant="outlined"
              {...register("bedrooms", { required: true })}
              error={!!errors.bedrooms}
            />
          </Grid>

          {/* BATHROOMS */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bathrooms"
              name="bathrooms"
              label="Bathrooms"
              fullWidth
              autoComplete="bathrooms"
              variant="outlined"
              {...register("bathrooms", { required: true })}
              error={!!errors.bathrooms}
            />
          </Grid>

          {/* GOOGLE MAP URL */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="googleMapUrl"
              name="googleMapUrl"
              label="Google Map Url"
              autoComplete="googleMapUrl"
              fullWidth
              variant="outlined"
              {...register("googleMapUrl", { required: true })}
              error={!!errors.googleMapUrl}
            />
          </Grid>

          {/* KEY FEATURES */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="keyFeatures"
              name="keyFeatures"
              label="Key Features"
              autoComplete="keyFeatures"
              fullWidth
              variant="outlined"
              {...register("keyFeatures", { required: true })}
              error={!!errors.keyFeatures}
            />
          </Grid>

          {/* IMAGES */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="images"
              name="images"
              label="Images"
              autoComplete="images"
              fullWidth
              variant="outlined"
              {...register("images", { required: true })}
              error={!!errors.images}
            />
          </Grid>

          {/* SUBMIT BUTTON */}
          <LoadingButton
            loadingIndicator="Loading..."
            loading={loading}
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
