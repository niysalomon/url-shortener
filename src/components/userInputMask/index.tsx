import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Useurls from "../../hooks/useAddNewRecord";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useTranslation } from "react-i18next";
const UserInputMask = () => {
  const { t, i18n } = useTranslation();
  const [inputData, setInputDate] = useState<string>("");
  const [openSnak, setOpenSnak] = React.useState(false);
  const {
    registerNewUrl,
    ttlInSeconds,
    setTtlInSeconds,
    url,
    setUrl,
    message,
    setMessage,
    messaType,
    setMessaType,
    idToRedirect,
    urlToBeRedirected,
    loadingUrlToBeRedirected,
  } = Useurls();
  const handleRedirect = (url:string) => {  
    window.open(url, "_blank");  
  };
  const handleCopy = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);  
      setOpenSnak(true)
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnak(false);
  };
  return (
    <Box sx={{ width: 1, padding: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 1",
          }}
        >
          <Typography></Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
            alignItems: "center",
          }}
        >
          {/* <Typography> {String(t('title'))}</Typography> */}
          <Typography>{String(t('title'))}</Typography>
          <TextField
            sx={{ width: "90%" }}
            onChange={(event) => {
              console.log("======", inputData);
              setUrl(event.target.value);
            }}
            name="name"
            required
            fullWidth
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Button
            onClick={registerNewUrl}
            sx={{ marginTop: 3 }}
            variant="outlined"
          >
            GO
          </Button>
        </Box>

        <Box
          sx={{
            gridColumn: "span 5",
          }}
        >
          <Typography></Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 1",
          }}
        >
          <Typography></Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
          }}
        >
          <Box
            
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {loadingUrlToBeRedirected ? (
              <CircularProgress disableShrink style={{ margin:25 }}/>
            ) : (
              <ArrowDownward onClick={registerNewUrl}
                style={{ height: "120px", width: "70px", cursor: "pointer" }}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Typography></Typography>
        </Box>

        <Box
          sx={{
            gridColumn: "span 5",
          }}
        >
          <Typography></Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 1",
          }}
        >
          <Typography> </Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
          }}
        >
          <Typography> Output Url</Typography>
          <TextField
            sx={{ width: "90%" }}
            onChange={(event) => {
              console.log("======", inputData);
              setInputDate(event.target.value);
            }}
            name="name"
            required
            value={urlToBeRedirected}
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Button onClick={()=>urlToBeRedirected&&handleRedirect(urlToBeRedirected)} sx={{ marginTop: 3 }} variant="outlined"> 
            Test
          </Button>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Button onClick={()=>urlToBeRedirected&&handleCopy(urlToBeRedirected)} sx={{ marginTop: 3 }} variant="outlined">
            Copy
          </Button>
        </Box>
        <Box
          sx={{
            gridColumn: "span 3",
          }}
        >
          <Typography></Typography>
        </Box>
      </Box>
      <Snackbar open={openSnak} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {urlToBeRedirected}{' '} copied!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default UserInputMask;
