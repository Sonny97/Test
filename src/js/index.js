/*---API's calls section-----*/ 

fetch('https://rickandmortyapi.com/api/').then((request) => {
  return request.json()
}).then((request) => {
  fetch(request.characters).then((requestCharacters) => {
    return requestCharacters.json()
  }).then((requestCharacters) => {
    console.log(requestCharacters);
    requestCharacters.results.forEach(element => {
      //create div container in grids
      let divElement = document.createElement('div');
      divElement.classList.add('col-sm-4');
      divElement.classList.add('container-elements');

      //added image
      let containerImageCharacter = document.createElement('div');
      containerImageCharacter.classList.add('container-elements--image');
      containerImageCharacter.innerHTML = '<img class="imageCharacters" src="'+ element.image +'"/>';

      //added text like name and others descriptions
      let nameCharacter = document.createTextNode(element.name);
      divElement.appendChild(containerImageCharacter);
      divElement.appendChild(nameCharacter);
      document.getElementById('containerGrid').appendChild(divElement);
    });
  })
})

