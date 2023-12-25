const getTodos = (resource) => {

    return new Promise((resolve,reject) => {

    const request = new XMLHttpRequest();

    request.open('GET',resource);
    request.send();

    request.addEventListener('readystatechange',()=>{
        //console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
    } else if(request.readyState === 4){
        //console.log('could not fetch the data')
        reject('error getting resource');
    }
        });

    });
};

getTodos('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('https://jsonplaceholder.typicode.com/todoss/2');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/3');
}).then(data => {
    console.log('promise 3 resolved'+ data);
}).catch(err => {
    console.log('promises rejected', err);
}); 


// Promises Example
/*const getSomething = () => {

    return new Promise((resolve,reject) => {
        resolve('some data');
        //reject('some error');
    });

};

getSomething().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
});

console.log(1);
console.log(2);
console.log(3);
console.log(4);*/