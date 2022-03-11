import {useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import {AppBar, TextField, Button} from "@material-ui/core";
import {CATEGORY, CREATELISTING, LOGIN} from "../mutations";
import {useMutation, useQuery} from "@apollo/client";
import {Menu} from "@mui/material";

// import MenuItem from "@mui/material/MenuItem";

export const BiddingCard = () => {
	const [categoryId, setCategoryId] = useState();
	const {loading, error, data} = useQuery(CATEGORY);
	const [executeCreateListing, {loading: loadingListing, error: errorListing}] =
		useMutation(CREATELISTING);
	console.log(data);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = async (auction) => {
		const {data} = await executeCreateListing({
			variables: {
				listingInput: {
					title: auction.title,
					description: auction.description,
					category: categoryId,
					reserveAmount: parseFloat(auction.reserveAmount),
					startingBid: parseFloat(auction.startingBid),
				},
			},
		});

		console.log(auction);

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
		console.log(event.target.value);
		setCategoryId(event.target.value);
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
				{...register("title", {required: true})}
				error={!!errors.title}
				// disabled={loading}
			/>

			<br />

			<TextField
				margin="normal"
				id="description"
				label="Description"
				name="description"
				variant="outlined"
				fullWidth
				{...register("description", {required: true})}
				error={!!errors.description}
				// disabled={loading}
			/>

			<br />

			{/* <FormControl fullWidth>
				<InputLabel id="title">Category</InputLabel>
				<Select
					labelId="category"
					id="category"
					label="category"
					{...register("category")}
					defaultValue=""
					autoFocus
					// disabled={loading}
				>
					{data &&
						data.getAllCategories.map((category, index) => {
							return (
								<MenuItem
									onClick={getTarget}
									key={index}
									value={category._id}
									id={category._id}
								>
									{category.title}
								</MenuItem>
							);
						})}
				</Select>
				{errors.title && "Please select your title"}
			</FormControl> */}

			<FormControl fullWidth>
				<InputLabel id="category-select">Category</InputLabel>
				<Select
					labelId="category-select"
					id="category"
					defaultValue=""
					label="Category"
					onChange={handleChange}
				>
					{data &&
						data.getAllCategories.map((category, index) => {
							return (
								<MenuItem key={index} value={category._id}>
									{category.title}
								</MenuItem>
							);
						})}
				</Select>
			</FormControl>

			<br />

			<TextField
				margin="normal"
				id="reserveAmount"
				type="number"
				label="Reserve Amount"
				name="reserveAmount"
				variant="outlined"
				fullWidth
				{...register("reserveAmount", {required: true})}
				error={!!errors.reserveAmount}
				// disabled={loading}
			/>

			<br />

			<TextField
				margin="normal"
				id="startingBid"
				type="number"
				label="Starting Bid"
				name="startingBid"
				variant="outlined"
				fullWidth
				{...register("startingBid", {required: true})}
				error={!!errors.startingBid}
				// disabled={loading}
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
