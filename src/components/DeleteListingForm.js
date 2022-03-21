import { useForm } from "react-hook-form";

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
import { useMutation } from "@apollo/client";
import { DELETE_LISTING } from "../mutations";
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

export const DeleteListingForm = ({ deleteAuctionId, onClose }) => {
  const [executeDeleteListing] = useMutation(DELETE_LISTING);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ listingId }) => {
    await executeDeleteListing({
      variables: {
        input: deleteAuctionId,
      },
    });

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
        Once Deleted the Listing Cannot be retrieved.
      </Typography>
      <FormControl>
        <LoadingButton
          loadingIndicator="Loading..."
          variant="contained"
          fullWidth
          type="submit"
          sx={styles.loadingButton}
          onClick={handleSubmit(onSubmit)}
        >
          DELETE
        </LoadingButton>
      </FormControl>
    </Box>
  );
};
