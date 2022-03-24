import {useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {ApolloError, useMutation} from "@apollo/client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ErrorIcon from "@mui/icons-material/Error";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {SingleImageUploader} from "../../components/SingleImageUploader";

import {SIGNUP} from "../../mutations";

export const SignUp = () => {
	const [uploadedImage, setUploadedImage] = useState();
	const [executeSignUp, {loading, error}] = useMutation(SIGNUP);
	const {
		register,
		handleSubmit,
		formState: {errors},
		getValues,
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async ({firstName, lastName, username, email, password}) => {
		try {
			const {data} = await executeSignUp({
				variables: {
					userInput: {
						firstName:
							firstName.charAt(0).toUpperCase() + firstName.slice(1).trim(),
						lastName:
							lastName.charAt(0).toUpperCase() + lastName.slice(1).trim(),
						username: username.trim(),
						email: email.toLowerCase().trim(),
						// imageUrl: uploadedImage.src,
						password,
					},
				},
			});

			if (data.addUser) {
				navigate("/login", {replace: true});
			}

			if (data.addUser === null) {
				throw new ApolloError(
					"Failed to create account, please try again later"
				);
			}
		} catch (err) {
			console.log(`[ERROR]: Failed to create User || ${err.message}`);
		}
	};

	const styles = {
		form: {
			backgroundColor: "#FFFFFF",
			display: "flex",
			flexDirection: "column",
			textAlign: "center",
			alignItems: "center",
			padding: 4,
			mt: "4rem",
			mb: "7rem",
			mx: "auto",
			maxWidth: 700,
			borderRadius: "0.7rem",
			boxShadow: 4,
		},
		textField: {
			width: "80%",
			flexGrow: 1,
		},
		loadingButton: {marginTop: 3, marginBottom: 2},
		errorContainer: {
			marginTop: 2,
			color: "#d32f2f",
			textAlign: "center",
		},
	};

	return (
		<Container>
			<Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h4" gutterBottom>
					Signup Form
				</Typography>
				<TextField
					margin="normal"
					id="firstName"
					label="First Name"
					name="firstName"
					variant="outlined"
					sx={styles.textField}
					{...register("firstName", {required: true})}
					error={!!errors.firstName}
					disabled={loading}
				/>
				<TextField
					margin="normal"
					id="lastName"
					label="Last Name"
					name="lastName"
					variant="outlined"
					sx={styles.textField}
					{...register("lastName", {required: true})}
					error={!!errors.lastName}
					disabled={loading}
				/>
				<TextField
					margin="normal"
					id="email"
					label="Email"
					name="email"
					variant="outlined"
					sx={styles.textField}
					{...register("email", {required: true})}
					error={!!errors.email}
					disabled={loading}
				/>

				<TextField
					margin="normal"
					id="username"
					label="Username"
					name="username"
					variant="outlined"
					sx={styles.textField}
					{...register("username", {required: true})}
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
					sx={styles.textField}
					{...register("password", {required: true, min: 8})}
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
					sx={styles.textField}
					{...register("confirmPassword", {
						required: true,
						validate: (value) => getValues("password") === value,
					})}
					error={!!errors.confirmPassword}
					helperText={!!errors.confirmPassword ? "Passwords do not match" : ""}
					disabled={loading}
				/>
				{/* <SingleImageUploader
				uploadedImage={uploadedImage}
				setUploadedImage={setUploadedImage}
			/> */}
				<LoadingButton
					sx={{backgroundColor: "#045ee0", width: "250px", margin: "20px"}}
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

				<Link
					component={RouterLink}
					to="/login"
					variant="body2"
					underline="none"
				>
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
		</Container>
	);
};
