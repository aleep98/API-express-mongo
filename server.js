import "dotenv/config";
import app from './src/app.js';
import chalk from 'chalk';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on port ${PORT}...`));
});

