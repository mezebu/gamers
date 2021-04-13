import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isValidSession, logOutSession } from "../utils/sessions";

import Drawer from "./Drawer";

const Dashboard = () => {
  const history = useHistory();

  useEffect(() => {
    if (!isValidSession()) {
      history.push("/");
    }
  });

  const logOut = () => {
    logOutSession();
    history.push("/");
  };

  return (
    <div>
      <Drawer />
      <p>Dashboard</p>
      <Button type="submit" variant="primary" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
};

export default Dashboard;
