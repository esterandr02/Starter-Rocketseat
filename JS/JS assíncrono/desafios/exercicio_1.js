var userAge = document.querySelector('#userAge input');
var btn = document.querySelector('#userAge button');

function checarIdade() {
    return new Promise(function(resolve, reject) {
        var age = userAge.value;

        if (age >= 18) {
            resolve('Maior');
        } else {
            reject('Menor');
        }
        userAge.value = '';
    });
}

// PROMISE AQUI  obs: uma promise eh assincrona, para a controlarmos com o click do botao, fizemos assim:

btn.onclick = function () {
    checarIdade()
    .then(function() {    // TRUE
        alert('Maior de idade');
    })
    .catch(function() {   // FALSE
        alert('Menor de idade');
    });
}
