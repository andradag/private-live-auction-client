import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { AppBar, TextField, Button } from "@material-ui/core";
import { LOGIN } from "../mutations";
import { useMutation } from "@apollo/client";

// import MenuItem from "@mui/material/MenuItem";

export const BiddingCard = () => {
  const [category, option] = React.useState("");
  const [executeLogin, { loading, error }] = useMutation(LOGIN);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    const { data } = await executeLogin({
      variables: {
        input: {
          email: email.toLowerCase().trim(),
          password,
        },
      },
    });

    // if (data) {
    //   const { token, user } = data.login;

    //   localStorage.setItem("token", token);
    //   localStorage.setItem("user", JSON.stringify(user));

    //   setIsLoggedIn(true);
    //   setUser({
    //     id: user.id,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //     username: user.username,
    //   });

    //   navigate("/dashboard", { replace: true });
    // }
  };

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
    <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        id="title"
        label="Title"
        name="title"
        variant="outlined"
        fullWidth
        {...register("title", { required: true })}
        error={!!errors.title}
        disabled={loading}
      />

      <br />

      <TextField
        margin="normal"
        id="description"
        label="Description"
        name="description"
        variant="outlined"
        fullWidth
        {...register("description", { required: true })}
        error={!!errors.description}
        disabled={loading}
      />

      <br />

      <FormControl
        style={
          {
            // width: "230px",
            // margin: "5px",
            // minWidth: 120,
            // marginTop: "10px",
            // textAlign: "center",
          }
        }
        variant="outlined"
        fullWidth
        {...register("category", { required: true })}
        error={!!errors.category}
        disabled={loading}
      >
        <InputLabel id="demo-simple-select-filled-label">
          Choose Category
        </InputLabel>

        <Select
          labelId="category"
          id="category"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>

      <br />

      <TextField
        margin="normal"
        id="reserveAmount"
        label="Reserve Amount"
        name="reserveAmount"
        variant="outlined"
        fullWidth
        {...register("reserveAmount", { required: true })}
        error={!!errors.reserveAmount}
        disabled={loading}
      />

      <br />

      <TextField
        margin="normal"
        id="startingBid"
        label="Starting Bid"
        name="startingBid"
        variant="outlined"
        fullWidth
        {...register("startingBid", { required: true })}
        error={!!errors.startingBid}
        disabled={loading}
      />

      <br />

      {/* <input
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
      </label> */}

      <br />

      <Button variant="contained" type="submit" color="primary">
        Save and continue
      </Button>
    </Box>
  );
};
