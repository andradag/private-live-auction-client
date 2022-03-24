import {useAuth} from "../../contexts/AppProvider";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

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

import {LOGIN} from "../../mutations";

export const LoginSide = () => {
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

	return (
		<Grid container component="main" sx={{height: "100vh"}}>
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
					<Avatar sx={{m: 1, bgcolor: "primary.main"}}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit(onSubmit)}
						sx={{mt: 1}}
					>
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
							autoFocus
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
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{mt: 3, mb: 2}}
						>
							Sign In
						</Button>
						<Grid container sx={{justifyContent: "center"}}>
							<Grid item>
								<Link href="#" variant="body2">
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
