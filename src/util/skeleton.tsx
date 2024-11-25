import { Box, Skeleton } from "@mui/material";

const SkeletonComponent = () => {
  return (
    <Box sx={{ margin: 5, marginLeft: 10 }}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          marginTop: 5,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          marginTop: 5,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </Box>
  );
};
export default SkeletonComponent;
