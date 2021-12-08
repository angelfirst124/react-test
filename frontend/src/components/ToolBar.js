import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export default function ToolBar({ openDraw, toggleDrawer, ColorModeContext, t, changeLanguage }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);
  const handleListClick = () => {
    setOpen(!open);
  };
  const handleChange = (lang) => {
    changeLanguage(lang);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ m: 2 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Marc Garcia" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
          </ListItemAvatar>
          <ListItemText primary={t("Marc Garcia")} secondary={t("logout")} sx={{ ml: 2 }} />
        </ListItem>
      </List>
      <Divider />
      <List sx={{ ml: 2 }}>
        <ListItem button component={Link} to="#" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <PersonIcon />
            <ListItemText primary={t("DashBoard")} sx={{ ml: 2 }} />
          </ListItemIcon>
        </ListItem>       
      </List>
      <Divider />
      <List sx={{ ml: 2 }}>
        <ListItem onClick={colorMode.toggleColorMode}>
          <ListItemIcon>
            {theme.palette.mode !== "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            <ListItemText primary={theme.palette.mode !== "dark" ? t("Dark Mode") : t("Light Mode")} sx={{ ml: 2 }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={handleListClick}>
          <ListItemIcon>
            <LanguageIcon />
            <ListItemText primary={t("Change language")} sx={{ ml: 2 }} />
          </ListItemIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 9 }} onClick={() => handleChange("en")}>
              <ListItemIcon>
                <ListItemText primary={t("English")} />
              </ListItemIcon>
            </ListItem>
            <ListItem button sx={{ pl: 9 }} onClick={() => handleChange("de")}>
              <ListItemIcon>
                <ListItemText primary={t("HebrewCre")} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>       
      </List>
    </Box>
  );
  return (
    <Drawer anchor={"left"} open={openDraw} onKeyDown={toggleDrawer(false)} onTouchMove={toggleDrawer(false)}>
      {list("left")}
    </Drawer>
  );
}
