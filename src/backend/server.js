import express from "express";
import cors from "cors";
import { addQuery, getAllQueries } from "./db.js";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.end("reached get");
});

app.get("/queries", async (req, res) => {
  const queries = await getAllQueries();
  res.send(queries);
});

app.post("/query", async (req, res) => {
  const query = {
    fullName: req.body.fullName,
    email: req.body.email,
    contact: req.body.contact,
    message: req.body.message,
  };
  const response = await addQuery(query);
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server started. Listening to port:${PORT}`);
});
