import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { DummyListItem } from "./../../types/types";
import { format } from "date-fns";
import "./List.css";

interface ListProps {
  searchTerm: string;
}

const List: React.FC<ListProps> = (props) => {
  const [orderBy, setOrderBy] = useState("name");

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/charts")
      .then((httpResponse) => httpResponse.json())
      .then((response) => {
        setList(
          response.charts
            .filter((x) =>
              x.name
                .toLowerCase()
                .includes(props.searchTerm?.toLowerCase() ?? "")
            )
            .sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1))
        );
      });
  }, [orderBy, props.searchTerm]);

  return (
    <div className="root">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="header"
      >
        <Grid item xs={6}>
          <Typography variant="body1">
            <Button
              style={{
                textTransform: "none",
                fontSize: 18,
                fontWeight: orderBy === "name" ? 700 : 500,
              }}
              onClick={() => {
                setOrderBy("name");
              }}
            >
              Name
            </Button>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            <Button
              style={{
                textTransform: "none",
                fontSize: 18,
                fontWeight: orderBy === "created_at" ? 700 : 500,
              }}
              onClick={() => {
                setOrderBy("created_at");
              }}
            >
              Date created
            </Button>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Button
              style={{
                textTransform: "none",
                fontSize: 18,
                fontWeight: orderBy === "modified_at" ? 700 : 500,
              }}
              onClick={() => {
                setOrderBy("modified_at");
              }}
            >
              Last modified
            </Button>
          </Typography>
        </Grid>
      </Grid>
      {list.map((item: DummyListItem, index: number) => (
        <Grid
          key={index}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography variant="body1">{item.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {format(new Date(item.created_at), "d MMM yyyy")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {format(new Date(item.created_at), "d MMM yyyy")}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default List;
