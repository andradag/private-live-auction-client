import {useForm} from "react-hook-form";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import {
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {useMutation} from "@apollo/client";
import {ADD_BID} from "../mutations";

const styles = {
	modalBox: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		textAlign: "center",
	},
	modalSpacing: {
		mb: 2,
	},
	// loadingButton: {marginTop: 3, marginBottom: 2},
};

export const PostBidForm = ({listingId}) => {
	const [executeAddBid, {loading, error}] = useMutation(ADD_BID);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = async ({bidAmmount}) => {
		console.log(bidAmmount);
		const {loading, data, error} = await executeAddBid({
			variables: {
				input: {amount: parseFloat(bidAmmount), listingId},
			},
		});
	};

	return (
		<Box sx={styles.modalBox}>
			<Typography
				id="modal-modal-title"
				variant="h6"
				component="h2"
				sx={styles.modalSpacing}
			>
				Custom Bidding
			</Typography>
			<FormControl>
				<InputLabel htmlFor="bidAmmount">Amount</InputLabel>
				<OutlinedInput
					id="bidAmmount"
					startAdornment={<InputAdornment position="start">£</InputAdornment>}
					label="bidAmmount"
					sx={styles.modalSpacing}
					type="number"
					{...register("bidAmmount", {required: true})}
				/>

				<LoadingButton
					// loading={loading}
					loadingIndicator="Loading..."
					variant="contained"
					fullWidth
					type="submit"
					sx={styles.loadingButton}
					// startIcon={error && <ErrorIcon />}
					// color={error ? "error" : "primary"}
					onClick={handleSubmit(onSubmit)}
				>
					Make Bid
				</LoadingButton>
			</FormControl>
		</Box>
	);
};
