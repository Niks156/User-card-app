import "./App.css";
import UsersList from "./Components/UsersList";
import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import Loader from "./Components/Loader/Loader.js";

export default function App() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [clicked, setclicked] = useState(false);

  function handleclick() {
    setclicked(true);
    axios.get("https://reqres.in/api/users?").then((response) => {
      setTimeout(() => {
        setloading(false);
      }, 1100);
      setusers(response.data.data);
    });
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "#334087", position: "relative" }}
        >
          <Toolbar sx={{ minHeight: 8 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 2 }}
            >
              LetsGrowMore
            </Typography>
            <Button
              color="inherit"
              onClick={handleclick}
              sx={{ marginRight: 2, fontSize: 19 }}
            >
              Get Users
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {clicked ? loading ? <Loader /> : <UsersList users={users} /> : null}
    </div>
  );
}
