const getTodos = async () =>{

    const response =  await fetch('https://jsonplaceholder.typicode.com/todoss/1');
    
    if(response.status != 200){
        throw new Error('cannot fetch the data');
    }

    const data  = await response.json();

    return data;

};

//const test = getTodos();
//console.log(test);
getTodos()
    .then(data => 
        console.log('resolved:', data))
    .catch(err => 
        console.log('rejected:', err.message));

