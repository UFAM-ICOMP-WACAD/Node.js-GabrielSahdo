const http = require("node:http")
const fs = require("fs")
const str_helper = require("./strings_helper")
const {createLink} = require("./createLink")
const { error } = require("node:console")
require("dotenv").config()

if (process.argv.length < 3){
    throw new Error("Número de parâmetros inválidos")
}

const dir = process.argv[2]
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
    if (req.url === "/"){
        fs.readdir(dir, (err, files) => {
            if (err) throw new Error(err);
            files.forEach((file) => res.write(createLink(dir, file)))
            res.end()
        })

    }else{
        fs.readFile(`.${req.url}`, "utf-8", (error, content) =>{
            //            console.log(`Requisição para ${req.url}`)
            if (error) throw new Error(error);
            res.end(content)
        })
    }
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`)
})