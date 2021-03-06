const express = require("express");

const dummyListData = [
  {
    name: "Chart 1",
    created_at: 1631530148312,
    modified_at: 1631530148312,
  },
  {
    name: "Chart 2",
    created_at: 1617010419094,
    modified_at: 1627284724744,
  },
  {
    name: "Test 3",
    created_at: 1626174889659,
    modified_at: 1626180305757,
  },
  {
    name: "My awesome test 4",
    created_at: 1622454043335,
    modified_at: 1622454043335,
  },
  {
    name: "Chart 5",
    created_at: 1622453396409,
    modified_at: 1622453396409,
  },
];

const PORT = 3001;

const app = express();

app.get("/api/charts", (req, res) => {
  res.json({ charts: dummyListData });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
