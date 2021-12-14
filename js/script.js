const arrayTitle = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
const arrayParagraphs = [
    'Lorem 1',
    'Lorem 2',
    'Lorem 3',
    'Lorem 4'
];
const arrayImages = [
    './img/img-1.jpg',
    './img/img-2.jpg',
    './img/img-3.jpg',
    './img/img-4.jpg'
];

let i = 0;

const buttonBack = document.getElementById('button-back');
const buttonNext = document.getElementById('button-next');
const boxTitle = document.getElementById('title');
const boxParagraph = document.getElementById('paragraph');
const boxImages = document.querySelector('.images');

boxTitle.innerHTML = arrayTitle[i];
boxParagraph.innerHTML = arrayParagraphs[i];
boxImages.src = arrayImages[i];

buttonNext.addEventListener('click', function() {
    i++

    if (i >= arrayTitle.length && i >= arrayParagraphs.length && i >= arrayImages.length) {
        i = 0;
    }

    boxTitle.innerHTML = arrayTitle[i];
    boxParagraph.innerHTML = arrayParagraphs[i];
    boxImages.src = arrayImages[i];
})

buttonBack.addEventListener('click', function() {
    i--

    if (i <= arrayTitle.length && i <= arrayParagraphs.length && i <= arrayImages.length) {
        i = 0;
    }

    boxTitle.innerHTML = arrayTitle[i];
    boxParagraph.innerHTML = arrayParagraphs[i];
    boxImages.src = arrayImages[i];
})



