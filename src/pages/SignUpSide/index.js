import {useState} from "react";
import {useNavigate, Link as RouterLink} from "react-router-dom";
import {useForm} from "react-hook-form";

import {ApolloError, useMutation} from "@apollo/client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import {SIGNUP} from "../../mutations";
import {SingleImageUploader} from "../../components/SingleImageUploader";

export const SignUpSide = () => {
	const [uploadedImage, setUploadedImage] = useState();
	const [executeSignUp, {loading, error}] = useMutation(SIGNUP);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		getValues,
		formState: {errors},
	} = useForm();

	const onSubmit = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }) => {
    try {
      const { data } = await executeSignUp({
        variables: {
          userInput: {
            firstName:
              firstName.charAt(0).toUpperCase() + firstName.slice(1).trim(),
            lastName:
              lastName.charAt(0).toUpperCase() + lastName.slice(1).trim(),
            username: username.trim(),
            email: email.toLowerCase().trim(),
            imageUrl: uploadedImage.src,
            password,
          },
        },
      });

      if (data.addUser) {
        navigate("/login", { replace: true });
      }

      if (data.addUser === null) {
        throw new ApolloError(
          "Failed to create account, please try again later"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              id="firstName"
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              autoFocus
              {...register("firstName", { required: true })}
              error={!!errors.firstName}
              disabled={loading}
            />
            <TextField
              margin="normal"
              id="lastName"
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              {...register("lastName", { required: true })}
              error={!!errors.lastName}
              disabled={loading}
            />
            <TextField
              margin="normal"
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              {...register("email", { required: true })}
              error={!!errors.email}
              disabled={loading}
            />

            <TextField
              margin="normal"
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              fullWidth
              {...register("username", { required: true })}
              error={!!errors.username}
              disabled={loading}
            />
            <TextField
              type="password"
              margin="normal"
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              {...register("password", { required: true, min: 8 })}
              error={!!errors.password}
              disabled={loading}
            />
            <TextField
              type="password"
              margin="normal"
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              fullWidth
              {...register("confirmPassword", {
                required: true,
                validate: (value) => getValues("password") === value,
              })}
              error={!!errors.confirmPassword}
              helperText={
                !!errors.confirmPassword ? "Passwords do not match" : ""
              }
              disabled={loading}
            />
            <SingleImageUploader
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
