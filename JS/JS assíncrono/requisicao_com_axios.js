axios.get('https://api.github.com/users/esterandr02') 
    .then(function(response) {   // se a requisicao estiver correta
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {    // requisicao incorreta
        console.warn(error);
    });

// SOBRE A BIBLIOTECA AXIOS https://github.com/axios/axios