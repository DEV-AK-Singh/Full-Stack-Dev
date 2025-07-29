import fs from 'fs';
const usersList = new Set();
setInterval(async () => {
    const users = await fs.promises.readFile('users.txt', 'utf8');
    console.log(users);
}, 3000);
