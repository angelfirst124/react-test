import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ToolBar from "./ToolBar";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";

const Header = ({ ColorModeContext, t }) => {
  // eslint-disable-next-line
  const [openDraw, setOpenDraw] = React.useState(false);
  
  const toggleDrawer = (flag) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDraw(flag);
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon onClick={toggleDrawer(true)} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            {t("Test Project")}
          </Typography>         
            <div>
              <PersonIcon />
            </div>
        </Toolbar>
        <ToolBar
          openDraw={openDraw}
          toggleDrawer={toggleDrawer}
          ColorModeContext={ColorModeContext}
          t={t}
          changeLanguage={changeLanguage}
        />
      </AppBar>
    </>
  );
};

export default withNamespaces()(Header);
