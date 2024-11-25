import { ThemeProvider } from "@emotion/react";
import {
  Modal,
  Box, 
  Button,
  createTheme,
} from "@mui/material"; 
const theme = createTheme();
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4, // Padding
};
const SuccessModal = ({
  isOpen,
  setIsOpen,
  message,
  messaType,
  handleAction,
}: {
  isOpen: boolean;
  setIsOpen: (_value: boolean) => void;
  message: string;
  messaType: string;
  handleAction?:()=>void;
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: 2,
            }}
          >
             {message} 
          </Box>
           
         <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            
            <Button
              variant="outlined"
              color="success"
              onClick={handleClose}
              sx={{ mt: 2, }}
            >
              Ok
              {/* {t("submit")} */}
            </Button>
          </Box> 
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
export default SuccessModal;
