/*
-Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
    -id del post, numero progressivo da 1 a n
    -nome autore,
    -foto autore,
    -data in formato americano (mm-gg-yyyy),
    -testo del post,
    -immagine (non tutti i post devono avere una immagine),
    -numero di likes.
Non è necessario creare date casuali 
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

-Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

-Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

-BONUS

    -Formattare le date in formato italiano (gg/mm/aaaa)

    -Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).

    -Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2023"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2023"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2023"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "",
        },
        "likes": 56,
        "created": "04-03-2023"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2023"
    }
];

console.log(posts);

// elemento html in cui inserirò i post
const postsListElement = document.querySelector(".posts-list");
console.log(postsListElement);

// forEach per inserire in pagina i post con le informazioni contenute nell'array di oggetti
posts.forEach(currentPost => {

    postsListElement.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${currentPost.author.image}" alt="${currentPost.author.image}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${currentPost.author.name}</div>
                <div class="post-meta__time">${currentPost.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${currentPost.content}</div>
    <div class="post__image">
        <img src="${currentPost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button" data-postid="${currentPost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${currentPost.id}" class="js-likes-counter">${currentPost.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>
    `;
})

// creo un array contenente i button per mettere like e aggiungo ad ognuno l'addeventlister
const buttonList = document.querySelectorAll(".like-button");
console.log(buttonList);

// creo array vuoto dove salverò id dei button cliccati
let likesCounterArray = [];

// forEach button
buttonList.forEach((button, index) => {

    // aggiungo addeventlistener
    button.addEventListener('click', function (){
        const likeCounterElement = document.querySelector(`#like-counter-${index + 1}`);
        likeCounterElement.innerText = posts[index].likes + 1;
        button.classList.add("like-button--liked");
        likesCounterArray.push(posts[index].id);
        console.log(likesCounterArray);
    })
})


// -Formattare le date in formato italiano (gg/mm/aaaa)
const dateArray = document.querySelectorAll(".post-meta__time");
const formattedDateArray = [];

dateArray.forEach((date, index) => {
    
    date = dateArray[index].innerText;
    console.log(date);
    date = date.split("-");
    console.log(date)
    date = date[1] + "/" + date[0] + "/" + date[2];
    console.log(date)
    formattedDateArray.push(date);
    console.log(formattedDateArray)

    dateArray[index].innerText = formattedDateArray[index];
})