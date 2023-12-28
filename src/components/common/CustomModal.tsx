import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ isOpen, onClose, title, children }: any) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{ m: 0 }}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle
        sx={{
          background: "#0986BB",
          pointerEvents: "auto",
          m: 0,
          p: 1,
          pl: 1.5,
          pr: 2,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", color: "white" }}
        >
          {title}
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ marginLeft: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
