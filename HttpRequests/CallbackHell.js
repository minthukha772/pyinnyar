const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();

    request.open('GET',resource);
    //request.open('GET','todos.json');
    request.send();

    request.addEventListener('readystatechange',()=>{
        //console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200){
        //console.log(request,request.responseText);
        const data = JSON.parse(request.responseText);
        callback(undefined,data);
    } else if(request.readyState === 4){
        //console.log('could not fetch the data')
        callback('could not fetch data',undefined);
    }
    });

    //request.open('GET','/HttpRequests/todos.json');
    //request.send();

    
};

console.log(1);
console.log(2);

getTodos('https://jsonplaceholder.typicode.com/todos/1',(err, data) => {
    console.log('callback fired');
    console.log(data);
getTodos('https://jsonplaceholder.typicode.com/todos/2',(err,data) => {
    console.log(data);

getTodos('https://jsonplaceholder.typicode.com/todos/3',(err,data) => {
    console.log(data);
});
    });
    
});


console.log(3);
console.log(4);