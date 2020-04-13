import api from './api';
class App {
  constructor() {
    this.repositories = [];
    this.formElements = document.getElementById('repo-form');
    this.inputElement = document.querySelector('input[name=repository]');
    this.listElements = document.getElementById('repo-list');

    this.register();
  }

  register() {
    this.formElements.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {

      let loadingElement = document.createElement('span');
      loadingElement.appendChild(document.createTextNode('Loading..'));
      loadingElement.setAttribute('id', 'loading');

      this.formElements(loading)
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;

    if (repoInput.length === 0) return;

    try {
      const response = await api.get(`/repos/${repoInput}`);
    
      const { name, description, html_url, owner: { avatar_url } } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });
      this.render();
      
    } catch(err) {
      alert('O repositório não existe, tente novamente.');
    }
    
    this.inputElement.value = '';
    this.setLoading(false);
  }

  render() {
    this.listElements.innerHTML = '';
    
    this.repositories.forEach(repo => {
      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', repo.avatar_url);

      let titleElement = document.createElement('strong');
      titleElement.appendChild(document.createTextNode(repo.name));

      let descriptionElement = document.createElement('p');
      descriptionElement.appendChild(document.createTextNode(repo.description));
      
      let linkElement = document.createElement('a');
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('href', repo.html_url);
      linkElement.appendChild(document.createTextNode('Acess'));

      let listItem = document.createElement('li');
      listItem.appendChild(imgElement);
      listItem.appendChild(titleElement);
      listItem.appendChild(descriptionElement);
      listItem.appendChild(linkElement);
      
      this.listElements.appendChild(listItem);
    });
  }
}

new App();