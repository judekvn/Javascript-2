async function fetchUsers() {
   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await resp.json();
   console.log(data);
}

fetchUsers()

const url = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',    
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(url.map(url =>
            fetch(url).then(resp => resp.json())
    ))
        console.log(users)
        console.log(posts)
        console.log(albums)
    }
    catch {
        console.log('oops')
    }
}

getData()