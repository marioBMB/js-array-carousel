const items = [
    'assets/img/01.jpg',
    'assets/img/02.jpg',
    'assets/img/03.jpg',
    'assets/img/04.jpg',
    'assets/img/05.jpg',
    'assets/img/06.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
    'Venezia',
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'La capitale di una delle più importanti repubbliche marinare. Fondata secondo la tradizione nel 697 da Paoluccio Anafesto, nel corso dei suoi millecento anni di storia si affermò come una delle maggiori potenze commerciali e navali europee. ',
];


let activeItemIndex = 0;
let thumbsPerPage = 5;
let pages = Math.ceil(items.length / thumbsPerPage);
let currPage = Math.ceil((activeItemIndex + 1) / thumbsPerPage);
let lastThumb = function(){ return ((activeItemIndex + 1) % thumbsPerPage) == 0};


let itemsBox = document.getElementsByClassName("images")[0];
let imgItems = itemsBox.getElementsByClassName("image-item");
const imgItemClone = [...imgItems];

let thumbnailsBox = document.getElementsByClassName("images-thumbnails")[0];
let thumbnailsContent = thumbnailsBox.getElementsByClassName("thumbnails-content")[0];
let thumbnailItems = thumbnailsBox.getElementsByClassName("thumbnail-item");
const thumbItemClone = [...thumbnailItems];

imgItems[0].remove();
thumbnailItems[0].remove();

// console.log(itemsBox);
// console.log(imgItemClone);
// console.log(thumbnailsBox);
// console.log(thumbItemClone);

for (let i = 0; i < items.length; i++){
    
    let newItemClone = [...imgItemClone][0];
    let newThumbClone = [...thumbItemClone][0];

    newItemClone.querySelector("img").src = items[i];
    newItemClone.querySelector("h2").innerHTML = title[i];
    newItemClone.querySelector("h4").innerHTML = text[i];
    newItemClone.data_index = i;
    itemsBox.innerHTML += newItemClone.outerHTML;

    newThumbClone.querySelector("img").src = items[i];
    thumbnailsContent.innerHTML += newThumbClone.outerHTML;
}

imgItems[activeItemIndex].classList.add('active');
thumbnailItems[activeItemIndex].classList.add('active');


const btnPrev = thumbnailsBox.querySelector(".slider.prev");
const btnNext = thumbnailsBox.querySelector(".slider.next");


btnPrev.addEventListener("click", function(){

    imgItems[activeItemIndex].classList.remove('active');
    thumbnailItems[activeItemIndex].classList.remove('active');

    activeItemIndex--;
    activeItemIndex = (( activeItemIndex + items.length) % items.length);

    imgItems[activeItemIndex].classList.add('active');
    thumbnailItems[activeItemIndex].classList.add('active');
});

btnNext.addEventListener("click", function(){
    
    imgItems[activeItemIndex].classList.remove('active');
    thumbnailItems[activeItemIndex].classList.remove('active');

    let lastPage = (currPage == pages);
    
    
    console.log("currPage", currPage);
    console.log ("lastPage", lastPage);
    console.log ("activeItemIndex", activeItemIndex);
    console.log("mod", activeItemIndex % thumbsPerPage);
    
    if (!lastPage && lastThumb()){

        thumbnailsContent.scrollBy({
            top: 500, /* va bene anche se c'è un solo elemento */
            left: 0,
            behavior: 'smooth'
        });
    }
    else if (lastPage && lastThumb()){
        
        thumbnailsContent.scrollBy({
            top: -500, /* va bene anche se c'è un solo elemento */
            left: 0,
            behavior: 'smooth'
        });
    }
    activeItemIndex++;
    
    activeItemIndex = (( activeItemIndex + items.length) % items.length);
    imgItems[activeItemIndex].classList.add('active');
    thumbnailItems[activeItemIndex].classList.add('active');


});

/* 
    quando arrivo all'ultima thumbnail per pagina e clicco giù

    se esiste un'altra pagina dopo
             mi scrolla dell'altezza di una immagine

    altrimenti 
            torna alla prima immagine (ciclo)
/*


thumbnailItems.addEventListener('click', function(){

    
});
*/