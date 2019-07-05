const promise1 = new Promise((resolve, reject) => {
    if (true){
        resolve('Worked');
    } else {
        reject('error');
    }   
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Helloooo')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hola')
})

Promise.all([promise1, promise2, promise3, promise4])
    .then(val => {
        console.log(val)
    })

promise1
.then(result => result + '!')
.then(result1 => result1 + '?')
.catch(() => console.log('error'))
.then(result3 => {   
    console.log(result3 + '!')
})