import React from "react";
import {
  Button,
  Paper,
  Typography,
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import MyCard from "./mycard";
import VirtualList from "./virtualize_list";

import data from "./data";

const useStyle = makeStyles({
  paper: {
    width: "100%",
    minHeight: "100vh",
  },
  typography: {
    flex: 1,
  },
  griditem: {
    background: "#cccccc",
    height: 250,
  },
});

function App() {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={10}>
        <Grid item container>
          <AppBar position="fixed">
            <Toolbar>
              <Typography className={classes.typography}>
                This is Header
              </Typography>
              <AcUnitIcon />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item container>
          <Grid item xs={2}></Grid>
          <Grid item container xs={8} spacing={1}>
            {/* {data.map((item) => (
              <Grid item xs={4}>
                <MyCard item={item} />
              </Grid>
            ))} */}
            <VirtualList />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
