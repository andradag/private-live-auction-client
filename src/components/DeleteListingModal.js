import Modal from "@mui/material/Modal";
import { DeleteListingForm } from "./DeleteListingForm";

export const DeleteListingModal = ({ open, onClose, listingId }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      listingId={listingId}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DeleteListingForm listingId={listingId} onClose={onClose} />
    </Modal>
  );
};
