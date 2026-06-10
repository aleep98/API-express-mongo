import http from 'http';
import chalk from 'chalk';

const PORT = 3000;

const rotas = {
    "/": "Curso Node.js"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end((rotas[req.url]));
});

server.listen(PORT, () => {
    console.log(chalk.green(`Server is running on port ${PORT}...`));
});

