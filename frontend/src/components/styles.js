import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: 100,
  },
  link: {
    textDecoration: "none",
  },
  select: {
    height: 30,
    width: 100,
  },
  gridItem: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  buttonAdd: {
    backgroundColor: "greenyellow",
    color: "black",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
  buttonEdit: {
    borderColor: "blue",
    color: "blue",
    "&:hover": {
      borderColor: "blue",
      backgroundColor: "blue",
      color: "white",
    },
  },
  buttonDelete: {
    borderColor: "red",
    color: "red",
    "&:hover": {
      borderColor: "red",
      backgroundColor: "red",
      color: "white",
    },
  },
});

export default useStyles;
