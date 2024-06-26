import express, { json } from "express";
import Products from "./products.mjs";
import Users from "./users.mjs";
import cors from "cors";
import { expressjwt as jwt } from "express-jwt";
import dotenv from "dotenv";
// import { randomBytes } from "crypto";
dotenv.config();
// console.log(randomBytes(64).toString("hex"));

const app = express();
const port = 3001;

app.use(json());
app.use(cors());
app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/users/login", "/users/register"] })
);
app.use("/products", Products);
app.use("/users", Users);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
