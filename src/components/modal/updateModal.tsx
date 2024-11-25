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
  p: 4, // Padding
};
const UpdateModal = ({
  isOpen,
  setIsOpen,
  recordId,
}: {
  isOpen: boolean;
  setIsOpen: (_value: boolean) => void;
  recordId: string;
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  const { singleUrl,refetchSingle } = useFetchSingleUrl(recordId);
  const[id,setId]=useState<string>("")
  const[url,setUrl]=useState<string>("")
  const[ttlInSeconds,setTtlInSeconds]=useState<number>(0)
  
  // useEffect(()=>{ 
  //   refetchSingle();
  //   if(singleUrl){
  //     setUrl(singleUrl?.data.url);
  //     setTtlInSeconds(singleUrl.data.ttlInSeconds);
  //     }
  // },[singleUrl])
  
  console.log("singleUrl==",singleUrl)
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
              Second
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
              //   onClick={registerNewUrl}
              sx={{ mt: 2 }}
            >
              SAVE
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
