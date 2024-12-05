import cors from "cors";
import express from "express";
import proxy from "express-http-proxy";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", proxy("http://localhost:3001"));
app.use("/cart", proxy("http://localhost:3002"));

app.listen(3000, () => {
    console.log(`Example app listening on port, http://localhost:3000`);
});