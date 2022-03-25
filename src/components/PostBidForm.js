import { useForm } from "react-hook-form";

import { format } from "date-fns";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";

import { useMutation } from "@apollo/client";
import { ADD_BID } from "../mutations";
import { useState } from "react";

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

export const PostBidForm = ({
  listingId,
  currentBid,
  startingBid,
  onClose,
}) => {
  const [executeAddBid, { loading, error }] = useMutation(ADD_BID);
  const [currentBidAmount, setCurrentBidAmount] = useState(
    currentBid?.amount || startingBid
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ bidAmount }) => {
    const bidTime = format(new Date(), "HH:mm:ss");

    if (+bidAmount > currentBidAmount) {
      const { loading, data, error } = await executeAddBid({
        variables: {
          input: { amount: parseFloat(bidAmount), listingId, bidTime },
        },
      });
      setCurrentBidAmount(+bidAmount);
    } else {
      alert("too low");
    }

    onClose();
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
        <InputLabel htmlFor="bidAmount">Amount</InputLabel>
        <OutlinedInput
          id="bidAmount"
          startAdornment={<InputAdornment position="start">£</InputAdornment>}
          label="bidAmount"
          sx={styles.modalSpacing}
          type="number"
          error={!!errors.bidAmount && "Oops"}
          {...register("bidAmount", {
            required: true,
            value: currentBidAmount + 5,
            min: currentBidAmount + 5,
          })}
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
          Submit Bid
        </LoadingButton>
      </FormControl>
    </Box>
  );
};
