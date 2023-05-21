import config from "../conf/index.js";

let gridSection = document.getElementById("data");

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  // console.log(cities)


  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let response = await fetch(`${config.backendEndpoint}/cities`);
    let data = response.json();
    return data;
  } catch (err) {
    return null
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

  /* 

  <div class="col-lg-3 col-6 mb-3">
            <a href="./resort/index.html">
              <div class="adventure-card border rounded">
                <img src="../../assets/adventures/resort.jpg" alt="Resort" />
                <div
                  class="adventure-card-text text-black p-3 d-flex justify-content-between"
                >
                  <h5>Resort</h5>
                  <p>₹1,200</p>
                </div>
              </div>
            </a>
          </div>
  
  */

  let divSection = document.createElement("div");
  divSection.setAttribute("class", "col-lg-3 col-6 mb-3");

  let aSection = document.createElement("a");
  aSection.setAttribute("href", "pages/adventures/?city=" + id);
  aSection.setAttribute("id", id);

  let cardSection = document.createElement("div");
  cardSection.setAttribute("class", "activity-card border rounded");

  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", image);
  cardImg.setAttribute("alt", city);

  let textSection = document.createElement("div");
  textSection.setAttribute(
    "class",
    "adventure-card-text text-white p-3 d-flex justify-content-between flex-column text-center"
  );
  let h5Heading = document.createElement("h5");
  h5Heading.textContent = city;
  let para = document.createElement("p");
  para.textContent = description;

  textSection.appendChild(h5Heading);
  textSection.appendChild(para);

  divSection.appendChild(aSection);
  aSection.appendChild(cardSection);
  cardSection.appendChild(cardImg);
  cardSection.appendChild(textSection);

  // let temp = `
  //         <div class="col-lg-3 col-6 mb-3">
  //         <a href="pages/adventures/?city=${id}">
  //           <div class="adventure-card border rounded">
  //             <img src="${image}" alt="${city}" />
  //             <div
  //               class="adventure-card-text text-black p-3 d-flex justify-content-between"
  //             >
  //               <h5>${city}</h5>
  //               <p>${description}</p>
  //             </div>
  //           </div>
  //         </a>
  //       </div>
  //     `;

  let dataSection = document.getElementById("data");
  // dataSection.innerHTML += temp

  dataSection.appendChild(divSection);
}

// console.log(
fetchCities()
// let cities = fetchCities()
// console.log(cities)

export { init, fetchCities, addCityToDOM };
