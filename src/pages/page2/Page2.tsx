import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Page2.css";

const Page2: React.FC = () => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <Grid container direction="column">
      <Grid item>This is chart creation page - nothing to see here though</Grid>
      <Grid item>
        <Button onClick={goBackHandler} className="createButton">
          Go back
        </Button>
      </Grid>
    </Grid>
  );
};

export default Page2;
