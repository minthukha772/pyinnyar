const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
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

getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


console.log(3);
console.log(4);