// LOAD CATEGORIES
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// DISPLAY CATEGORIES
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  console.log(categories);
  categories.forEach((item) => {
    console.log(item.id);
    const div = document.createElement("div");
    //  div.classList.add('p-4')
    div.innerHTML = `
      
      <button id="btn-${item.category}" onclick="loadSpecificPets('${item.category}')" class="btn  btn-category"><img class="h-10 w-10" src=${item.category_icon} />  ${item.category}</button>
     `;
    categoriesContainer.appendChild(div);
  });
};

// LOAD ALL PETS
const loadAllPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
};






//  const demo = {
//   "petId": 4,
//   "breed": "Holland Lop",
//   "category": "Rabbit",
//   "date_of_birth": "2023-06-30",
//   "price": 200,
//   "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
//   "gender": "Female",
//   "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
//   "vaccinated_status": "Not",
//   "pet_name": "Nibbles"
// }
// DISPLAY PETS
const displayPets = (pets) => {
  const cardContainer=document.getElementById('card-container')
  cardContainer.innerHTML= " "
  if(pets.length == 0){
    cardContainer.classList.remove('grid')
    cardContainer.classList.add('col-span-3')
    cardContainer.innerHTML=`
    <div class="text-center flex flex-col justify-center items-center "> 
      <div class="text-center"> <img class=" lg:w-80 w-30  " src="./assets/error.webp" /> </div>
      <h2 class="text-xl font-bold">NO CONTENT HERE</h2>
    </div>

    `
    return;
  }
  else{
    cardContainer.classList.add('grid')
  }
  console.log(pets);
  pets.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    card.classList.add('border-2')
    card.innerHTML = `
        
      <figure class="px-5 pt-5">
        <img
          src=${item.image}
          alt="Shoes"
          class="rounded-xl" />
      </figure>
      <div class="card-body  text-left">
        <h2 class="text-xl font-bold"> ${item.pet_name} </h2>
        <p class="flex gap-2"><img src="./assets/breed.png"/>Breed:${item.breed}</p> 
        <p class="flex gap-2"><img src="./assets/calander.png"/>Birth:${item.date_of_birth}</p>
        <p class="flex gap-2"> <img src="./assets/gender.png"/>Gender:${item.gender}</p>
        <p class="flex gap-2"><img src="./assets/Dolor.png"/>Price:${item.price}</p>

        <div class="flex gap-3 "> 
          <button class="btn btn-success"><i class="fa-solid fa-thumbs-up fa-lg" style="color: #bec8da;"></i>  </button>
          <button class="btn btn-success text-white">Adopt </button>
          <button class="btn btn-success text-white">Details </button>
        </div>
      </div>
      

    `;
    cardContainer.appendChild(card)
  });
};

// LOAD CATEGORY PETS 
const loadSpecificPets=(name)=>{
   
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
    .then((res) => res.json())
    .then((data) => {
      const activeBtn= document.getElementById(`btn-${name}`)
      console.log(activeBtn)
      activeBtn.classList.add('bg-green-200')
      displayPets(data.data)
    })
    .catch((error) => console.log(error));
}

loadCategories();
loadAllPets();
