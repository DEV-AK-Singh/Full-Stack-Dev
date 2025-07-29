import fs from 'fs';

const usersList: Set<string> = new Set();

setInterval(async () => {
    const usersData = await fs.promises.readFile('users.txt', 'utf8');
    const users = usersData.trim().split('\n');
    for (const user of users) {
        const newUser = user.trim();
        if (!usersList.has(newUser)) {
            console.log(`New user: ${newUser}`);
            usersList.add(newUser.trim());
        }
    }
    console.log('Waiting...'); 
}, 3000);

// docker run --rm -it -v "$PWD/users.txt:/app/users.txt" notifier-app:01