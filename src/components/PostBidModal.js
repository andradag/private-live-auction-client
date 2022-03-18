import Modal from "@mui/material/Modal";
import {PostBidForm} from "./PostBidForm";

export const PostBidModal = ({open, onClose, listingId}) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<PostBidForm listingId={listingId} />
		</Modal>
	);
};
