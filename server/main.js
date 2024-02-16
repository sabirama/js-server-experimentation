import http from "http";
import routing from "./src/js/routing.js";

const port = 3010;
const app = http.createServer((req, res) => {
  routing(req, res);
});

app.listen(port, "localhost", () => {
  console.log(`Server running at http://localhost:${port}/`);
});