import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useMutation} from "@apollo/client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import {useAuth} from "../../contexts/AppProvider";

import {LOGIN} from "../../mutations";

export const Login = () => {
	const {setIsLoggedIn, setUser} = useAuth();
	const [executeLogin, {loading, error}] = useMutation(LOGIN);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = async ({email, password}) => {
		const {data} = await executeLogin({
			variables: {
				loginInput: {
					email: email.toLowerCase().trim(),
					password,
				},
			},
		});
		if (data) {
			const {token, user} = data.login;

			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));

			setIsLoggedIn(true);
			setUser(user);

			navigate("/dashboard", {replace: true});
		}
	};

	const styles = {
		form: {
			backgroundColor: "#FFFFFF",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 4,
			marginTop: "30px",
			mx: "auto",
			width: 700,
			border: "solid",
			borderRadius: "20px",
		},

		loadingButton: {marginTop: 3, marginBottom: 2},
		errorContainer: {
			marginTop: 2,
			color: "#d32f2f",
			textAlign: "center",
		},
	};

	return (
		<Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Typography variant="h4" gutterBottom>
				Login Form
			</Typography>
			<TextField
				margin="normal"
				id="email"
				label="Email"
				name="email"
				variant="outlined"
				fullWidth
				{...register("email", {required: true})}
				error={!!errors.email}
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
				{...register("password", {required: true})}
				error={!!errors.password}
				disabled={loading}
			/>

			<LoadingButton
				sx={{backgroundColor: "#045ee0", width: "250px", margin: "20px"}}
				loading={loading}
				loadingIndicator="Loading..."
				variant="contained"
				type="submit"
				startIcon={error && <ErrorIcon />}
				color={error ? "error" : "primary"}
			>
				Login
			</LoadingButton>
			<Link
				component={RouterLink}
				to="/signup"
				variant="body2"
				underline="none"
			>
				Don't have an account? Sign Up
			</Link>
			{error && (
				<Typography
					variant="subtitle2"
					gutterBottom
					component="div"
					sx={styles.errorContainer}
				>
					Failed to login, please enter valid email address and/or password.
				</Typography>
			)}
		</Box>
	);
};
