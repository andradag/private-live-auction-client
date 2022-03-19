import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import { ApolloError, useMutation } from "@apollo/client";

import { SIGNUP } from "../../../mutations";

export const SignUp = () => {
  const [executeSignUp, { loading, error }] = useMutation(SIGNUP);
  console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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
            firstName: firstName.toLowerCase().trim(),
            lastName: lastName.toLowerCase().trim(),
            username: username.toLowerCase().trim(),
            email: email.toLowerCase().trim(),
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

  const styles = {
    container: {
      backgroundColor: "#fff",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 4,
      marginTop: "20px",
      mx: "auto",
      width: 700,
      border: "solid",
      borderRadius: "20px",
    },

    loadingButton: { marginTop: 3, marginBottom: 2 },
    errorContainer: {
      marginTop: 2,
      color: "#d32f2f",
      textAlign: "center",
    },
  };

  return (
    <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom>
        SignUp Form
      </Typography>
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
        id="firstName"
        label="First Name"
        name="firstName"
        variant="outlined"
        fullWidth
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
        {...register("password", { required: true })}
        error={!!errors.password}
        disabled={loading}
      />

      <LoadingButton
        sx={{ backgroundColor: "#045ee0", width: "250px", margin: "20px" }}
        loading={loading}
        loadingIndicator="Loading..."
        variant="contained"
        fullWidth
        type="submit"
        startIcon={error && <ErrorIcon />}
        color={error ? "error" : "primary"}
      >
        Click here to proceed
      </LoadingButton>

      <Link component={RouterLink} to="/login" variant="body2" underline="none">
        Already have an account? Login
      </Link>
      {error && (
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={styles.errorContainer}
        >
          Failed to sign up, please make sure you enter the correct details or
          try again later.
        </Typography>
      )}
    </Box>
  );
};
