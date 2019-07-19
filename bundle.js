/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*---API's calls section-----*/

fetch("https://rickandmortyapi.com/api/")
  .then(request => {
    return request.json();
  })
  .then(request => {
    //aca obtiene el link de los personajes pag 1
    fetch(request.characters)
      .then(requestCharacters => {
        return requestCharacters.json();
      })
      .then(requestCharacters => {
        putCharacters(requestCharacters);
        callAPI(requestCharacters);
      });
  });

function callAPI(request) {
  fetch(request.info.next)
    .then(request => {
      return request.json();
    })
    .then(requestCharacters => {
      if (requestCharacters.results.length === 20) {
        console.log(requestCharacters);
        putCharacters(requestCharacters);
        callAPI(requestCharacters);
      } else {
        if (requestCharacters.results.length === 13) {
          console.log(requestCharacters);
          putCharacters(requestCharacters);
          callAPI(requestCharacters);
        }
      }
    });
}

function putCharacters(requestCharacters) {
  requestCharacters.results.forEach(element => {
    //image section

    //create div container in grids
    let divElement = document.createElement("div");
    divElement.classList.add("col-sm-4");
    divElement.classList.add("container-elements");

    //added image
    let containerImageCharacter = document.createElement("div");
    containerImageCharacter.classList.add("container-elements--image");
    containerImageCharacter.id = "containerImageCharacter";
    containerImageCharacter.innerHTML =
      '<img class="imageCharacters" id="ImageCharacter" src="' +
      element.image +
      '"/>';

    //added text like name and others descriptions
    let nameCharacter = document.createElement("div");
    nameCharacter.innerHTML =
      '<h2 class="container-elements__position">' + element.name + "</h2>";
    nameCharacter.classList.add("container-elements--text");

    containerImageCharacter.addEventListener("click", function() {
      containerImageCharacter.classList.remove("container-elements--image");
      containerImageCharacter.classList.add("container--temporaly");
      putInformationcharacter(containerImageCharacter, element);
    });

    function putInformationcharacter(containerImageCharacter, element) {
      //info section-- declare the container
      let divInfo = document.createElement("div");
      divInfo.classList.add("container-info--character");

      //declare info vars
      let genderContainer = document.createElement("div");
      genderContainer.classList.add("gender-container");

      //declare title of var
      let gender = document.createElement("label");
      gender.classList.add("gender-text");
      gender.innerHTML = "Genero: ";

      //declare var's content
      let genderCharacter = document.createElement("label");
      genderCharacter.classList.add("gender-text");
      genderCharacter.innerHTML = element.gender;

      //added to container section var
      genderContainer.appendChild(gender);
      genderContainer.appendChild(genderCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let statusContainer = document.createElement("div");
      statusContainer.classList.add("status-container");

      //declare title of var
      let status = document.createElement("label");
      status.classList.add("status-text");
      status.innerHTML = "Estado: ";

      //declare var's content
      let statusCharacter = document.createElement("label");
      statusCharacter.classList.add("status-text");
      statusCharacter.innerHTML = element.status;

      //added to container section var
      statusContainer.appendChild(status);
      statusContainer.appendChild(statusCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let speciesContainer = document.createElement("div");
      speciesContainer.classList.add("species-container");

      //declare title of var
      let species = document.createElement("label");
      species.classList.add("species-text");
      species.innerHTML = "Especie: ";

      //declare var's content
      let speciesCharacter = document.createElement("label");
      speciesCharacter.classList.add("species-text");
      speciesCharacter.innerHTML = element.species;

      //added to container section var
      speciesContainer.appendChild(species);
      speciesContainer.appendChild(speciesCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let originContainer = document.createElement("div");
      originContainer.classList.add("origin-container");

      //declare title of var
      let origin = document.createElement("label");
      origin.classList.add("origin-text");
      origin.innerHTML = "Especie: ";

      //declare var's content
      let originCharacter = document.createElement("label");
      originCharacter.classList.add("origin-text");
      console.log(element.origin);
      originCharacter.innerHTML = element.origin.name;

      //added to container section var
      originContainer.appendChild(origin);
      originContainer.appendChild(originCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let locationContainer = document.createElement("div");
      locationContainer.classList.add("location-container");

      //declare title of var
      let location = document.createElement("label");
      location.classList.add("location-text");
      location.innerHTML = "Ubicacion: ";

      //declare var's content
      let locationCharacter = document.createElement("label");
      locationCharacter.classList.add("location-text");
      locationCharacter.innerHTML = element.location.name;

      //added to container section var
      locationContainer.appendChild(location);
      locationContainer.appendChild(locationCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let typeContainer = document.createElement("div");
      typeContainer.classList.add("type-container");

      //declare title of var
      let type = document.createElement("label");
      type.classList.add("type-text");
      type.innerHTML = "Tipo: ";

      //declare var's content
      let typeCharacter = document.createElement("label");
      typeCharacter.classList.add("type-text");
      typeCharacter.innerHTML = element.type;

      //added to container section var
      typeContainer.appendChild(type);
      typeContainer.appendChild(typeCharacter);

      /*---------------------------------------------------------*/

      //declare info vars
      let episodecontainer = document.createElement("div");
      episodecontainer.classList.add("episode-container");

      //declare title of var
      let episode = document.createElement("label");
      episode.classList.add("episode-text");
      episode.innerHTML = "Episodio: ";

      //declare var's content
      let episodeCharacter = document.createElement("label");
      episodeCharacter.classList.add("episode-text");
      episodeCharacter.innerHTML = '<a href="'+ element.episode[0] + '">Episodios</a>';

      //added to container section var
      episodecontainer.appendChild(episode);
      episodecontainer.appendChild(episodeCharacter);


      divInfo.appendChild(genderContainer);
      divInfo.appendChild(statusContainer);
      divInfo.appendChild(speciesContainer);
      divInfo.appendChild(originContainer);
      divInfo.appendChild(locationContainer);
      divInfo.appendChild(typeContainer);
      divInfo.appendChild(episodecontainer);

      containerImageCharacter.appendChild(divInfo);
    }

    containerImageCharacter.appendChild(nameCharacter);
    divElement.appendChild(containerImageCharacter);

    document.getElementById("containerGrid").appendChild(divElement);
  });
}


/***/ })
/******/ ]);