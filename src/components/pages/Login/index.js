import {useMutation} from "@apollo/client";
import {useForm} from "react-hook-form";
import {Link as RouterLink, useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";
import Divider from "@mui/material/Divider";

import {useAuth} from "../../../contexts/AppProvider";

import {LOGIN} from "../../../mutations";

export const LoginForm = () => {
	const {setIsLoggedIn, setUser} = useAuth();
	const [executeLogin, {loading, error}] = useMutation(LOGIN);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async ({email, password}) => {
		const {data} = await executeLogin({
			variables: {
				input: {
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
			setUser({
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				username: user.username,
			});

			navigate("/dashboard", {replace: true});
		}
	};

	const styles = {
		container: {
			backgroundImage: `url(${Image})`,
		},

		header: {
			paddingTop: 2,
			paddingBottom: 2,
			backgroundColor: "#F8F8FF",
			mx: "auto",
			width: 700,
		},

		form: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 4,
			mx: "auto",
			width: 700,
		},

		loadingButton: {marginTop: 3, marginBottom: 2},
		errorContainer: {
			marginTop: 2,
			color: "#d32f2f",
			textAlign: "center",
		},
	};

	return (
		<Box>
			<Typography
				variant="h4"
				gutterBottom
				component="h1"
				align="center"
				sx={styles.header}
			>
				Login
			</Typography>
			<Divider />
			<Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
					loading={loading}
					loadingIndicator="Loading..."
					variant="contained"
					fullWidth
					type="submit"
					sx={styles.loadingButton}
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
		</Box>
	);
};
