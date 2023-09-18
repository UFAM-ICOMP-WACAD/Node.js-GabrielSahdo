function createLink(dir, filename) {
    return `<a href="/${dir}/${filename}">${filename}</a><br>\n`;
    }
function voltar(dir, filename){
    return `<a href="/">Voltar</a>`  ;
}

module.exports = { createLink, voltar }