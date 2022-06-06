const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Error getting resource')
            }
        });

        request.open('GET', resource);
        request.send();
    });  
}

getData('todos.json').then(data => {
    console.log('Promise 1 fulfilled: ', data);
    return getData('todos2.json');
}).then(data => {
    console.log('Promise 2 fulfilled: ', data);
    return getData('todos3.json');
}).then(data => {
    console.log('Promise 3 fulfilled: ', data);
}).catch(error => {
    console.log('Promise rejected: ', error);
});





