import Drawer from "@mui/material/Drawer";

import { PostBidForm } from "./PostBidForm";

export const PostBidModal = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="top">
      <PostBidForm onClose={onClose} />
    </Drawer>
  );
};
