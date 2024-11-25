import { Box, TextField, Typography } from "@mui/material";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetchUrls from "../../hooks/useFetchUrls";
import { convertStringToString, stringToNumberFuntion } from "../../util";
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
              <TableRow sx={{ fontWeight: "500" }}>
                <TableCell>
                  <button onClick={() => setOpenAdd(true)}>Add New</button>
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>TTL</TableCell>
                <TableCell>Creation-Date Time</TableCell>
                <TableCell>Last-Changed-Date Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {urlList &&
                urlList?.data?.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
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
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell>{item.url}</TableCell>
                    <TableCell>{item.ttlInSeconds}</TableCell>
                    <TableCell>
                      {convertStringToString(item.createdDate)}
                    </TableCell>
                    <TableCell>
                      {convertStringToString(item.modifiedDate)}
                    </TableCell>
                  </TableRow>
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