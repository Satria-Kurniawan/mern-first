import React from "react";
import UserList from "./components/UserList.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">App Bar</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/edit-user/:id" element={<EditUser />} />
            </Routes>
          </Container>
        </main>
      </CssBaseline>
    </BrowserRouter>
  );
};

export default App;
