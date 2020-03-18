var userName = document.querySelector('#user input');
var btn = document.querySelector('#user button');
var list = document.querySelector('#user ul');

// esterandr02 pjavier98

btn.onclick = function() {
    axios.get('https://api.github.com/users/'+ userName.value + '')

        .then(function(response) {

        // LOGIN
            var login = document.createElement('li');
            login.appendChild(document.createTextNode('User: ' + response.data.login));
            list.appendChild(login);
            
        // AVATAR URL
            var linkAvatar = document.createElement('a');
            linkAvatar.setAttribute('href', response.data.avatar_url);
            linkAvatar.appendChild(document.createTextNode('link do avatar'));
            list.appendChild(linkAvatar);
        })

        .catch(function(error) {
            console.warn(error);
        });

// REPOSITORIOS

    axios.get('https://api.github.com/users/'+ userName.value + '/repos')

        .then(function(response) {

        // LISTA COM REPOSITORIOS
            var repoList = document.createElement('ol');
            repoList.appendChild(document.createTextNode('### Repositories ###'));
            
            for (repo of response.data) {
                var repositoryName = document.createElement('li');
                repositoryName.appendChild(document.createTextNode(repo.name));
                repoList.appendChild(repositoryName);
            }
            list.appendChild(repoList);
        })
        .catch(function(error) {
            console.warn(error);
        });

    userName.value = '';
}