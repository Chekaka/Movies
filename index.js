let movies = [
  {
    id:Math.random(),
    name: "The incredibles",
    year: 2004,
    rating: 4.7,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg",
  },
  {
    id: Math.random(),
    name: "Family Switch",
    year: 2023,
    rating: 3.3,
    image:
      "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/familyswitch.jpeg",
  },
  {
    id: Math.random(),
    name: "TAYLOR SWIFT THE ERAS TOUR",
    year: 2023,
    rating: 5.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTE5ZjU5YzQtZjQ4Ni00NzVhLWE3NDQtMTEyNzgzNzU3OTYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
  },
];

const todoList = [
  {
    id: 1,
    title: 'Buy groceries',
    isDeleted: false
  },
  {
    id: 2,
    title: 'Complete homework',
    isDeleted: false
  },
  {
    id: 3,
    title: 'Call the bank',
    isDeleted: true
  },
  {
    id: 4,
    title: 'Clean the house',
    isDeleted: false
  }
];


let cards = document.querySelector("#cards");
let openModal = document.querySelector("#add_btn");
let modal = document.querySelector("#modal_add");
let closeModal = document.querySelector("#close_btn");
let movieName = document.querySelector("#movieName");
let movieUrl = document.querySelector("#movieUrl");
let submitBtn = document.querySelector("#submit");
let movieYear = document.querySelector("#movieYear");
let movieRating = document.querySelector("#movieRating");

function render() {
  cards.innerHTML = "";
  movies.forEach((element) => {
    let movie = `
      <div class="movie-card">
      <img src="${element.image}" alt="Movie Poster" class="movie-image" />
      <div class="movie-info">
          <h2 class="movie-title">${element.name}</h2>
          <p class="movie-year">Year: ${element.year}</p>
         
        
      <p class="movie-rating">Rating: ${element.rating}/5</p>
       <button onclick="deleteCard(${element.id})" class="btn"> x </button>
      </div>
  
  </div> 
      `;

    cards.insertAdjacentHTML("beforeend", movie);
  });
}

render();

openModal.onclick = () => {
  modal.style.display = "flex";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

submitBtn.onclick = () => {
  movies.unshift({
    name: movieName.value,
    year: movieYear.value,
    rating: movieRating.value,
    image: movieUrl.value,
    id:Math.random() ,
  });

  render();
  modal.style.display = "none";
};

function deleteCard(cardId) {
  movies = movies.filter((el) => el.id != cardId);
  render();
}
