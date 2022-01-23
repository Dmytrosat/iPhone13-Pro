const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((responce) => {
        if(responce.ok) {
            return responce.json()
        } else {
            throw new Error('Данные были получены с ошибкой!')
        }
        
    })
        // .then((responce) => responce.json()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log('finally');
    })
};

getData();