import http from "http";
import routing from "./src/js/routing.js";

const port = 10000;
const app = http.createServer((req, res) => {
  routing(req, res);
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/`);
});