import Modal from "@mui/material/Modal";
import { DeleteListingForm } from "./DeleteListingForm";

export const DeleteListingModal = ({ open, onClose, deleteAuctionId }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      deleteAuctionId={deleteAuctionId}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DeleteListingForm deleteAuctionId={deleteAuctionId} onClose={onClose} />
    </Modal>
  );
};
