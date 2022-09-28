import React from "react";
import { Link } from "react-router-dom";
import {StyledDashboard} from "./style";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <h1>This is dashboard</h1>
      <Link to="/login">Login</Link>
    </StyledDashboard>
  );
};
