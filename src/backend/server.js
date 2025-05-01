import express from "express";
import { addQuery, getAllQueries } from "./db.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.end("reached get");
});

app.get("/queries", async (req, res) => {
  const queries = await getAllQueries();
  console.log(queries);
  res.send(queries);
});

app.post("/query", (req, res) => {
  const query = {
    fullName: req.body.fullName,
    email: req.body.email,
    contact: req.body.contact,
    message: req.body.message,
  };
  addQuery(query);
  res.send(req.body.fullName);
});

app.listen(PORT, () => {
  console.log(`Server started. Listening to port:${PORT}`);
});
