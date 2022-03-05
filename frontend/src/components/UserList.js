import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyles from "./styles";

const UserList = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:5000/users/" + id);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <Link to="/add-user" className={classes.link}>
        <Button variant="contained" color="success">
          Add User
        </Button>
      </Link>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ACTIONS</TableCell>
              <TableCell>GENDER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <Link to={"/edit-user/" + user._id} className={classes.link}>
                    <Button sx={{ mr: 1 }} variant="outlined">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    onClick={() => deleteUser(user._id)}
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
