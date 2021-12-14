const arrayTitle = ['Spring', 'Lake', 'Road', 'Summer'];
const arrayParagraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vero delectus provident dicta mollitia ipsum ad corrupti, assumenda eum repudiandae, soluta recusandae quae. Molestias dolorem minima magni consequatur dignissimos tenetur.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ut tempore qui id esse unde cupiditate perferendis architecto delectus animi excepturi vitae sed, reiciendis voluptates dolore perspiciatis minus temporibus voluptate?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam blanditiis dolor perspiciatis, natus aliquid quaerat quia dolore iure, aspernatur quasi animi voluptate? Dicta aut adipisci cum, autem nobis quam?',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id rerum voluptatum fugiat, sequi, vitae saepe maiores perspiciatis nesciunt veritatis asperiores reprehenderit cumque quibusdam adipisci distinctio eius aliquid quam. In, culpa?'
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



