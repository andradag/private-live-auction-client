import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {useMutation} from "@apollo/client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import {UPDATE_PROFILE} from "../../mutations";

export const ProfileDetails = ({user, setIsLoggedIn}) => {
	const [values, setValues] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		username: user.username,
	});
	const [executeUpdateProfile] = useMutation(UPDATE_PROFILE);

	const navigate = useNavigate();

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async () => {
		const {data} = await executeUpdateProfile({
			variables: {
				input: {
					id: user.id,
					firstName:
						values.firstName.charAt(0).toUpperCase() +
						values.firstName.slice(1).trim(),
					lastName:
						values.lastName.charAt(0).toUpperCase() +
						values.lastName.slice(1).trim(),
					username: values.username.trim(),
					email: values.email.trim(),
				},
			},
		});
		console.log(data);

		if (data) {
			localStorage.clear();
			setIsLoggedIn(false);
			alert("Profile successfully updated, please log-in again");
			navigate("/login", {replace: true});
		}
	};

	return (
		<form autoComplete="off">
			<Card>
				<CardHeader subheader="The information can be edited" title="Profile" />
				<Divider />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								helperText="Please specify the first name"
								label="First name"
								name="firstName"
								onChange={handleChange}
								required
								value={values.firstName}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Last name"
								name="lastName"
								onChange={handleChange}
								required
								value={values.lastName}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Email Address"
								name="email"
								onChange={handleChange}
								required
								value={values.email}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Username"
								name="username"
								required
								onChange={handleChange}
								value={values.username}
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						p: 2,
					}}
				>
					<Button
						color="primary"
						variant="contained"
						onClick={() => handleSubmit()}
					>
						Save details
					</Button>
				</Box>
			</Card>
		</form>
	);
};
