const fs = require("fs")

fs.readFile("./../dir/arquivo.txt", "utf-8", (err, conteudo) => {
    console.log(conteudo)
})

console.log("oiii")