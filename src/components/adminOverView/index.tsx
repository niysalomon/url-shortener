import { Box, TextField, Typography } from "@mui/material";

import * as React from "react";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody"; 
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from "@mui/material/Paper";
import useFetchUrls from "../../hooks/useFetchUrls";
import { convertStringToString, stringToNumberFuntion } from "../../util";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Button, ThemeProvider, createTheme } from "@mui/material"; 
import Useurls from "../../hooks/useAddNewRecord";
import { useTranslation } from "react-i18next";
import ConfirmModal from "../modal";
import UpdateModal from "../modal/updateModal";
import { useState } from "react";
import SuccessModal from "../modal/successModal";
import SkeletonComponent from "../../util/skeleton";
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
 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



const AdminOverView = () => {
  const { t } = useTranslation();

  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  //   const [url, setNewUrl] = React.useState<string>("");
  //   const [ttlInSeconds, setTtlInSeconds] = React.useState<number>(0);

  const [recordId, setRecordId] = React.useState<string>("");
  const [urlToEdit, setUrlToEdit] = useState<string>("");
  const [ttlInSecondsToEdit, setTtlInSecondsToEdit] = useState<number>(0);

  const { urlList, isLoading, isFetching, error, refetch } = useFetchUrls();
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
    deleteRecord,
    setIdToRedirect,
    isSuccess,
    setIsSuccess,
    openDelete,
    setOpenDelete,
    openAdd,
    setOpenAdd,
  } = Useurls();
  const handleClose = () => setOpenAdd(false);

  return (
    <>
      {isLoading ? (
        <SkeletonComponent />
      ) : (
        <TableContainer sx={{ margin: 3, paddingRight: 5 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow sx={{ fontWeight: "500" }}>
                <StyledTableCell>
                <Button onClick={() => setOpenAdd(true)} variant="outlined" startIcon={<AddIcon />}>
                Add New
</Button> 
                </StyledTableCell>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>URL</StyledTableCell>
                <StyledTableCell>TTL</StyledTableCell>
                <StyledTableCell>Creation-Date Time</StyledTableCell>
                <StyledTableCell>Last-Changed-Date Time</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {urlList &&
                urlList?.data?.map((item, index) => (
                  <StyledTableRow 
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex" }}
                    >
                      <Box sx={{ cursor: "pointer" }}>
                        <EditIcon
                          onClick={() => {
                            setOpenEdit(true);
                            setRecordId(item.id);
                          }}
                        />
                      </Box>
                      <Box sx={{ cursor: "pointer" }}>
                        <DeleteIcon
                          onClick={() => {
                            setOpenDelete(true);
                            setIdToRedirect(item.id);
                            setMessage("Are you sure you want to delete this?");
                            setMessaType("warning");
                          }}
                        />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell>{item.url}</StyledTableCell>
                    <StyledTableCell>{item.ttlInSeconds}</StyledTableCell>
                    <StyledTableCell>
                      {convertStringToString(item.createdDate)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {convertStringToString(item.modifiedDate)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>

          <ThemeProvider theme={theme}>
            <Modal
              open={openAdd}
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
                    Add New record
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
                      setTtlInSeconds(
                        stringToNumberFuntion(event.target.value)
                      );
                    }}
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
                    onClick={registerNewUrl}
                    sx={{ mt: 2 }}
                  >
                    SAVE
                    {/* {t("submit")} */}
                  </Button>
                </Box>
              </Box>
            </Modal>
          </ThemeProvider>
          {openEdit && (
            <UpdateModal
              isOpen={openEdit}
              setIsOpen={setOpenEdit}
              recordId={recordId}
            />
          )}
          <ConfirmModal
            isOpen={openDelete}
            setIsOpen={setOpenDelete}
            message={message}
            messaType={messaType}
            handleAction={() => {
              deleteRecord();
            }}
          />
          <SuccessModal
            isOpen={isSuccess}
            setIsOpen={setIsSuccess}
            message={message}
            messaType={""}
          />
        </TableContainer>
      )}
    </>
  );
};
export default AdminOverView;