import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import {GlobalStyled} from "./styles/globalStyled";
import { Login } from './pages/login/login';
import { SignUp } from './pages/signUp/signUp';
import { Dashboard } from './pages/dashboard/dashboard';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyled />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
