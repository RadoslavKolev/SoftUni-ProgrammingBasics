// Fetch API

const getData = async () => {
  try {
    const response  = await fetch('todos3.json');
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(error.message);
  }
}

getData()
  .then(data => console.log(data));

// fetch('todos.json').then(response => {
//   console.log(`resolved`, response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch((error) => {
//   console.log(`rejected`, error);
// });