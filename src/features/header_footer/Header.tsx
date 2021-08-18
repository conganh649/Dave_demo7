import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../auth/authSlice";
import "./Header_footer.css";

const Header: FC = () => {
  const [isLoggedIn] = useState<boolean>(
    Boolean(localStorage.getItem("access_token"))
  );
  const dispatch = useAppDispatch();
  let history = useHistory();
  const handelLogoutClick = () => {
    if (isLoggedIn) dispatch(authActions.logout());
    else {
      console.log("Not login yet");
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px",
          marginTop: "0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div
              onClick={() => {
                history.push("/");
              }}
              style={{ width: "200px", textAlign: "left" }}
            >
              <div className="header_logo_name">Dave's</div>
              <div className="header_logo_title">Movie Collection</div>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "white",
              width: "120px",
              fontWeight: "bold",
              border: "1px solid",
            }}
            onClick={handelLogoutClick}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
