type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function apiCallHandling(): Promise<Post> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json(); 
    return data;
}

apiCallHandling().then(data => console.log(data));