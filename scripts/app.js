const url = "https://forkify-api.herokuapp.com/api/search?q=pizza";

// connect to api using fetch
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


