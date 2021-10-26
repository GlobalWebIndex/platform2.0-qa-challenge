import React, { Dispatch, SetStateAction } from "react";
import "./Header.css";
import {
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();

  const onSearchTermChanged = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    props.setSearchTerm(e.target.value);
  };

  const resetSearchTerm = () => {
    props.setSearchTerm("");
  };

  const goToPage2Handler = () => {
    history.push("/Page2");
  };

  return (
    <Toolbar>
      <Grid container>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
          <Grid item>
            <TextField
              placeholder="Search charts"
              value={props.searchTerm}
              onReset={resetSearchTerm}
              onChange={onSearchTermChanged}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              Charts
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={goToPage2Handler} className="createButton">
              Create a chart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
