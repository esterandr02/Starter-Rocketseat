var userName = document.querySelector('#user input');
var btn = document.querySelector('#user button');
var list = document.querySelector('#user ul');

function createLoading() {
    var loading = document.createElement('li');
    loading.appendChild(document.createTextNode('Loading...'));
    list.appendChild(loading);

    return loading;
}

btn.onclick = function() {
    var load = createLoading();
    
    axios.get('https://api.github.com/users/'+ userName.value + '')
    
    .then(function(response) {
        list.removeChild(load);

        // LOGIN
            var login = document.createElement('li');
            login.appendChild(document.createTextNode('User: ' + response.data.login));
            list.appendChild(login);
            
        // AVATAR URL
            var linkAvatar = document.createElement('a');
            linkAvatar.setAttribute('href', response.data.avatar_url);
            linkAvatar.appendChild(document.createTextNode('avatar link'));
            list.appendChild(linkAvatar);
        })

        .catch(function(error) {
            list.removeChild(load);
            console.warn(error);
            alert('ERROR 404! user does not exist. Please reload the page, and try again');
        });

// REPOSITORIOS

    axios.get('https://api.github.com/users/'+ userName.value + '/repos')

        .then(function(response) {

        // LISTA COM REPOSITORIOS

            var repoList = document.createElement('ol');
            repoList.appendChild(document.createTextNode('******* Repositories *******'));
            
            for (repo of response.data) {
                var item = document.createElement('li');
                var repositoryName = document.createElement('a');

                repositoryName.setAttribute('href', 'https://github.com/' + userName.value + '/' + repo.name + '');
                repositoryName.appendChild(document.createTextNode(repo.name));
                
                item.appendChild(repositoryName);
                repoList.appendChild(item);
            }
            
            list.appendChild(repoList);
        })
        .catch(function(error) {
            console.warn(error);
        });
}