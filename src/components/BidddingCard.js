import {useState} from "react";
import {useForm} from "react-hook-form";

import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import {TextField} from "@material-ui/core";
import {CATEGORY, CREATELISTING} from "../mutations";
import {useMutation, useQuery} from "@apollo/client";
import {Typography} from "@mui/material";

export const BiddingCard = () => {
	const [categoryId, setCategoryId] = useState();
	const {loading, error, data} = useQuery(CATEGORY);
	const [executeCreateListing, {loading: loadingListing, error: errorListing}] =
		useMutation(CREATELISTING);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = async (auction) => {
		await executeCreateListing({
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
	};

	const handleChange = (event) => {
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
		loadingButton: {marginTop: 3, marginBottom: 2},
		errorContainer: {
			marginTop: 2,
			color: "#d32f2f",
			textAlign: "center",
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
				{...register("description", {required: true})}
				error={!!errors.description}
				disabled={loading}
			/>

			<br />

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
				disabled={loading}
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

			<LoadingButton
				loading={loadingListing}
				loadingIndicator="Loading..."
				variant="contained"
				type="submit"
				sx={styles.loadingButton}
				startIcon={errorListing && <ErrorIcon />}
				color={errorListing ? "error" : "primary"}
			>
				Save and continue
			</LoadingButton>
			{errorListing && (
				<Typography
					variant="subtitle2"
					gutterBottom
					component="div"
					sx={styles.errorContainer}
				>
					Failed to create listing, please try again later.
				</Typography>
			)}
		</Box>
	);
};
