
    const request = new XMLHttpRequest();

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();

    request.addEventListener('readystatechange',()=>{
        //console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log('OK',request.responseText);
    } else if(request.readyState === 4){
        console.log('could not fetch the data')
        //callback('could not fetch data',undefined);
    }
    });

    
console.log(1);
console.log(2);

console.log(3);
console.log(4);