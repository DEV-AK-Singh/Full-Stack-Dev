// function FetchData(url: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.text())
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//     });
// }

// FetchData('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

type Data = {
    title: string;
    body: string;
    userId: number;
    id: number;
}

function FetchData(url: string): Promise<Data | string> {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then((data: Data) => resolve(data))
            .catch((error: Error) => reject(error));
    });
}