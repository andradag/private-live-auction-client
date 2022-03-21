import Modal from "@mui/material/Modal";
import { PostBidForm } from "./PostBidForm";

export const PostBidModal = ({
  open,
  onClose,
  listingId,
  currentBid,
  startingBid,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PostBidForm
        listingId={listingId}
        currentBid={currentBid}
        startingBid={startingBid}
        onClose={onClose}
      />
    </Modal>
  );
};
