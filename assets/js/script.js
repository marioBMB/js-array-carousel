const items = [
    'assets/img/01.jpg',
    'assets/img/02.jpg',
    'assets/img/03.jpg',
    'assets/img/04.jpg',
    'assets/img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let activeItemIndex = 0;

let itemsBox = document.getElementsByClassName("images")[0];
let imgItems = itemsBox.getElementsByClassName("image-item");
const imgItemClone = [...imgItems];

let thumbnailsBox = document.getElementsByClassName("images-thumbnails")[0];
let thumbnailItems = thumbnailsBox.getElementsByClassName("thumbnail-item");
const thumbItemClone = [...thumbnailItems];

imgItems[0].remove();
thumbnailItems[0].remove();

console.log(itemsBox);
console.log(imgItemClone);
console.log(thumbnailsBox);
console.log(thumbItemClone);

for (let i = 0; i < items.length; i++){
    
    let newItemClone = [...imgItemClone][0];
    let newThumbClone = [...thumbItemClone][0];

    newItemClone.querySelector("img").src = items[i];
    newItemClone.querySelector("h2").innerHTML = title[i];
    newItemClone.querySelector("h4").innerHTML = text[i];
    itemsBox.innerHTML += newItemClone.outerHTML;

    newThumbClone.querySelector("img").src = items[i];
    thumbnailsBox.innerHTML += newThumbClone.outerHTML;
}

imgItems[activeItemIndex].classList.add('active');
thumbnailItems[activeItemIndex].classList.add('active');

const btnPrev = document.querySelector("slider prev")[0];
const btnNext = document.querySelector("slider next")[0];


btnPrev.addEventListener("click", function(){

    activeItemIndex--;

});


btnNext.addEventListener("click", function(){
    
    activeItemIndex++;

});