import http from "http";
import app from "./app.js";
import connectDB from "./db/db.connecion.js";

const port = process.env.PORT || 5001;

const server = http.createServer(app);

const db = connectDB();

server.listen(port, () => {
    console.log(`Example app listening on port, http://localhost:${port}`);
});