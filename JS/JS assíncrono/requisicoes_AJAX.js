var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/esterandr02');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {        // estado de retorno pronto
                if (xhr.status === 200) {      // status da requisicao (correta)
                    resolve(JSON.parse(xhr.responseText));  // converter o retorno da requisicao
                } else {
                    reject('Erro na requisicao');   // falha na requisicao
                }
            }
        }
    });
}

myPromise() 
    .then(function(response) {   // se a requisicao estiver correta
        console.log(response);
    })
    .catch(function(error) {    // requisicao incorreta
        console.warn(error);
    });