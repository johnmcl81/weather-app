var somePromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('It worked!');
    }, 2500);
    
});

somePromise.then((message) =>{
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});