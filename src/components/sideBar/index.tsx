import HomeIcon from "@mui/icons-material/Home";
import { Box, Hidden, Link, Typography } from "@mui/material";
const SideBar = ({isAdmin,setIsAdmin}:{
    isAdmin:string;setIsAdmin:(_value:string)=>void;
}) => {
  const sideLink = [
    {
      name: "User input Mask",
      icon: HomeIcon,
      link: "inputMask",
    },
    {
      name: "Admin Overview",
      icon: HomeIcon,
      link: "admin",
    },
  ];
  console.log("object",isAdmin);
  return (
    <Box
      sx={{
        backgroundColor: "#e0e0e0",
        display: "flex",
        
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: " ",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            ls: "start",
          },
          width: "100%",
        }}
      ><Box sx={{borderBottom: "1px solid",
      borderColor: "#bdbdbd", width: "100%",}}> 
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1" 
            fontWeight={400}
            fontSize={18}
            sx={{padding:3}}
          >
            Logo
          </Typography>
        </Hidden>
        </Box>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            width: "100%",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
          }}
        >
          {sideLink.map((item, key) => (
            <Box
              sx={{
                borderBottom: "1px solid",
                borderColor: "#bdbdbd",
                width: "100%",
              }}
            > 
                <Box key={key} onClick={()=>{setIsAdmin(item.link)}}
                  py={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "#10141F",
                    textDecoration: "none",
                    paddingTop: "2px",
                    cursor:"pointer"
                  }}
                >
                  <HomeIcon style={{ width: 18, height: 18 }} />
                  {/* <img src={HomeIcon} alt="" style={{width:"18px",filter:""}}/> */}
                  <Hidden mdDown>
                    <Typography >{item.name}</Typography>
                  </Hidden>
                </Box> 
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
