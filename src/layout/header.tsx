import { Box, Button, Menu, MenuItem, Select, Typography } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CircleIcon from "@mui/icons-material/Circle";
import { useTranslation } from "react-i18next";
import React from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "#bdbdbd",
        gap: 1,
        padding: 2,
      }}
    >
      <Box>
      <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DehazeIcon style={{ height: "33px", width: "40px" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>{handleLanguageChange("en")}}>English</MenuItem>
        <MenuItem onClick={()=>{handleLanguageChange("de")}}>Deutsch</MenuItem> 
      </Menu>
    </div> 
        
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        {/* Form Title */}
        {/* <Typography variant="h5">{t("title")}</Typography> */}

        {/* Language Selector */}
        <Select
          value={i18n.language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: 100 }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="de">Deutsch</MenuItem>
        </Select>
      </Box>
      <Box>
        <CircleIcon sx={{ color: "#000000", height: "33px", width: "40px" }} />
      </Box>
    </Box>
  );
};
export default Header;
