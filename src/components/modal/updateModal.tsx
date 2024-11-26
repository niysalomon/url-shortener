import { ThemeProvider } from "@emotion/react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  createTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { stringToNumberFuntion } from "../../util";
import useFetchSingleUrl from "../../hooks/useFetchSingleRecord";
import { useEffect, useState } from "react";
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
  p: 4,  
};
const UpdateModal = ({
  isOpen,
  setIsOpen,
  recordId,
  ttlInSeconds,
url,
setTtlInSeconds,
setUrl,
mutateUpdate,
}: {
  isOpen: boolean;
  setIsOpen: (_value: boolean) => void;
  recordId: string;
  ttlInSeconds:number;
  setTtlInSeconds:(_value:number)=>void;
url:string;
setUrl:(_value:string)=>void;
mutateUpdate:()=>void;
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  const { singleUrl,refetchSingle } = useFetchSingleUrl(recordId);
   
  
  // useEffect(()=>{ 
  //   refetchSingle();
  //   if(singleUrl){
  //     setUrl(singleUrl?.data.url);
  //     setTtlInSeconds(singleUrl.data.ttlInSeconds);
  //     }
  // },[singleUrl])
   
  return (<>
   {singleUrl && <ThemeProvider theme={theme}>
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
            <Typography id="modal-title" component="h2">
              Update record
            </Typography>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Typography id="modal-title" component="h2">
              Url
            </Typography>
            <TextField
              sx={{ width: "100%", marginBottom: 3 }}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
              value={url}
              name="name"
              required
              fullWidth
            />
            <Typography id="modal-title" component="h2">
              Second {/* {t("seconds")} */}
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              onChange={(event) => {
                setTtlInSeconds(stringToNumberFuntion(event.target.value));
              }}
              value={ttlInSeconds}
              name="name"
              required
              fullWidth
            />
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
                onClick={mutateUpdate}
              sx={{ mt: 2 }}
            >
              UPDATE
              {/* {t("submit")} */}
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>}
    </>
  );
};
export default UpdateModal;
