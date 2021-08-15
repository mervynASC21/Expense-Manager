const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDay() + 15;
let year = date.getFullYear();
document.querySelector(".date").innerHTML = "date created: " + month + "/" + day + '/' + year;

let button = document.querySelector('.btn-rec');

button.addEventListener('click', function() {
    plan = document.createElement('div')
    plan.className = 'plan';
    card = document.createElement('div');
    card.className = 'card';
    header = document.createElement('header');
    header.className = 'card__header';
    h3 = document.createElement('h3');
    h3.className = 'plan__name';
    h3.innerHTML = 'newRecommendation';
    // date = document.createElement('p');
    // date.className = 'date'
    // date.innerHTML = "date created: " + month + "/" + day + '/' + year;
    description = document.createElement('p');
    description.className = 'plan__description';

    header.appendChild(description)
    //header.appendChild(date)
    header.appendChild(h3);
    card.appendChild(header);
    plan.appendChild(card);

    body = document.querySelector('body');

    body.appendChild(plan)

})
