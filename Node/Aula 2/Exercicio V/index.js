const http = require("http");
const fs = require("fs");
require("dotenv").config();
const createLink = require("./util");

const PORT = process.env.PORT ?? 6767;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  const path = process.argv[2];

  res.write(`<h1>Arquivos do Dir</h1>`);

  if (req.url == "/") {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          res.write(`${createLink(file)} <br>`);
        });
      }
      res.end();
    });
  } else {
    res.write(`<a href="/" >Voltar</a><br/><br/>`);

    fs.readFile(`${path}${req.url}`, "utf-8", (err, conteudo) => {
      if (!err || err.errno == -2) {
        res.write(conteudo);
        res.end();
      } else {
        console.log(err);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});