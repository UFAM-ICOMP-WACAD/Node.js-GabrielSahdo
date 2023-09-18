import http from "node:http";
import fs from "node:fs/promises";
import {} from "dotenv/config";

const PORT = process.env.PORT ?? 6767;

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/index.js":
      res.writeHead(200, { "Content-Type": "text/plain" });
      const jsFile = await lerArquivo("./pages/index.js");
      res.write(jsFile);
      res.end();

    case "/style.css":
    res.writeHead(200, { "Content-Type": "text/css" });
    const cssFile = await lerArquivo("./pages/style.css");
    res.write(cssFile);
    res.end();
    break;

    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      const htmlFile = await lerArquivo("./pages/index.html");
      res.write(htmlFile);
      res.end();
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Tá funfando em http://localhost:${PORT}`);
});

const lerArquivo = async (file) => {
  try {
    return await fs.readFile(`${file}`, "utf8");
  } catch (err) {
    console.log(err);
  }
};