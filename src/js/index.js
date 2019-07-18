/*---API's calls section-----*/ 

fetch('https://rickandmortyapi.com/api/').then((request) => {
  return request.json()
}).then((request) => {
  //aca obtiene el link de los personajes pag 1
  fetch(request.characters).then((requestCharacters) => {
    return requestCharacters.json()
  }).then((requestCharacters) => {
    callAPI(requestCharacters);
  })
})


function callAPI(request){
  fetch(request.info.next).then((request) => {
    return request.json()
  }).then((requestCharacters) => {
    if (requestCharacters.results.length === 20) {
      console.log(requestCharacters);
      putCharacters(requestCharacters);
      callAPI(requestCharacters);
    }
  })
}



function putCharacters(requestCharacters) {
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
    let nameCharacter = document.createElement('div');
    nameCharacter.innerHTML = '<h2 class="container-elements__position">' + element.name + '</h2>';
    nameCharacter.classList.add('container-elements--text');
    containerImageCharacter.appendChild(nameCharacter);
    divElement.appendChild(containerImageCharacter);

    let buttonInfo = document.createElement('div');
    buttonInfo.classList.add('container-element--button-info')
    
    document.getElementById('containerGrid').appendChild(divElement);
  });
}