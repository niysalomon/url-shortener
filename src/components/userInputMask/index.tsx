import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const UserInputMask = () => {
  const [inputData, setInputDate] = useState<string>("");
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
          <Typography> Input Url</Typography>
          <TextField
            sx={{ width: "90%" }}
            onChange={(event) => {
              console.log("======", inputData);
              setInputDate(event.target.value);
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
          <Button sx={{marginTop:3}} variant="outlined">GO</Button>
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ArrowDownward
              style={{ height: "120px", width: "70px", cursor: "pointer" }}
            />
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
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Button sx={{marginTop:3}}  variant="outlined">Test</Button>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Button sx={{marginTop:3}}  variant="outlined">Copy</Button>
        </Box>
        <Box
          sx={{
            gridColumn: "span 3",
          }}
        >
          <Typography></Typography>
        </Box>
      </Box>
    </Box>

     
  );
};
export default UserInputMask;
