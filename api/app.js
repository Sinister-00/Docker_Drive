const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale...pushed_image_check",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond. check frontend!",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
