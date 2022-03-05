import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Container,
  Select,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import { Box } from "@mui/system";

const AddUser = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="sm" className={classes.container}>
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
          Add User
        </Typography>
        <Box component="form" onSubmit={saveUser}>
          <Grid container>
            <Grid item xs={12} className={classes.gridItem}>
              <TextField
                variant="standard"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={8} className={classes.gridItem}>
              <TextField
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <FormControl variant="standard">
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Button variant="contained" type="submit" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AddUser;
