'use strict';

const newForm = document.querySelector('.js-new-form');

/* newForm.classList.remove("collapsed");*/

const dataList = document.querySelector(".js-list");


const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneDesc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenOneRace = "Siamés";

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp"
const kittenThreeName = "Cielo";
const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenThreeRace = "Maine Coon";

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
  ${kittenOneDesc}
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenTwoImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenTwoRace}</h4>
  <p class="card_description">
  ${kittenTwoDesc}
   </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenThreeImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenThreeRace}</h4>
  <p class="card_description">
  ${kittenThreeDesc}
   </p>
</article>
</li>`;




/*dataList.innerHTML = kittenOne;



/*const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
            </p>
          </li>`*/

/*dataList.innerHTML += kittenTwo;*/

/*const kittenThree = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">
              Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
            </p>
          </li>`*/



/*dataList.innerHTML += kittenThree;*/



/*if(kittenOneDesc.includes (descSearchText)) {
  dataList.innerHTML = kittenOne;
  }

if(kittenTwoDesc.includes (descSearchText)) {
  dataList.innerHTML += kittenTwo;
}
if(kittenThree.includes (descSearchText)) {
  dataList.innerHTML += kittenThree;
} */




const buttonSearch = document.querySelector(".js-button-search");


const filterKitten = (event) => {
event.preventDefault();
const input_search_desc = document.querySelector(".js_in_search_desc");
const descSearchText = input_search_desc.value;
dataList.innerHTML="";
  if (kittenDat.includes(descSearchText)) {
    dataList.innerHTML += kittenData_1;
    console.log("hola");
  }
  if (kittenTwoDesc.includes(descSearchText)) {
    dataList.innerHTML += kittenData_2;
  }
  if (kittenThreeDesc.includes(descSearchText)) {
    dataList.innerHTML += kittenData_3;
  } 
};

dataList.innerHTML += kittenData_1;
dataList.innerHTML += kittenData_2;
dataList.innerHTML += kittenData_3;

buttonSearch.addEventListener('click', filterKitten);




const newform = document.querySelector(".js-new-form");
const plus = document.querySelector(".js-fas");


/*plus.addEventListener('click', (event) => {
  if (newform.classList.contains('collapsed')) {
  newform.classList.remove("collapsed");
} else {
  newform.classList.add("collapsed"); 

}});*/
plus.addEventListener('click', handleClickNewCatForm);

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newform.classList.contains('collapsed')) {
    newform.classList.remove('collapsed');
  } else {
    newform.classList.add('collapsed');
  }
}




const addbtn = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};


const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};


function renderKitten(kittenData_1) {
  const kittenNew = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenData_1.image}
    alt="gatito"
  />
  <h3 class="card_title">${kittenData_1.name}</h3>
  <p class="card_description">
  ${kittenData_1.desc}
   </p>
</article>
</li>`;

dataList.innerHTML += `<li>${kittenNew}</li>`;
}
renderKitten(kittenData_1);
renderKitten(kittenData_2);
renderKitten(kittenData_3);


addbtn.addEventListener('click', addNewKitten);

function addNewKitten(event) {
event.preventDefault()


const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;


if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  console.log(valueDesc)
;  labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
} else {

renderKitten(valueDesc,valueName,valuePhoto);



inputDesc.value = '';
inputName.value = '';
inputPhoto.value = '';
newform.classList.add("collapsed"); 

}
};


const buttonCancelForm = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) => {

inputDesc.value = '';
inputName.value = '';
inputPhoto.value = '';
newform.classList.add("collapsed"); 

};

buttonCancelForm.addEventListener('click', cancelNewKitten);