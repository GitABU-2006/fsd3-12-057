import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/")
    res.end(`
    <h1>Home Page</h1>
    <a href="/product">Product</a>
    <br>
    <a href="/productEnquiry">Product Enquiry</a>
  `);
  else if (req.url === "/product") {
    const stream = createReadStream("./product.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else if (req.url === "/productEnquiry") {
    const stream = createReadStream("./productEnquiry.html", {
      encoding: "utf-8",
    });
    stream.pipe(res);
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));
