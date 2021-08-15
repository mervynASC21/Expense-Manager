// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBu3o88ZXsrroHmf1PiFeWMSHhY9jo90oQ",
authDomain: "expense-tracker-a7264.firebaseapp.com",
projectId: "expense-tracker-a7264",
storageBucket: "expense-tracker-a7264.appspot.com",
messagingSenderId: "672380797363",
appId: "1:672380797363:web:66d7ea25168cfe38d38bc6",
measurementId: "G-1CEQ7SZ8KQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const textElement = document.querySelector("#text")
const amountElem = document.querySelector("#amount")
const buttonref = document.querySelector("#button")
buttonref.addEventListener("click", updateDB);

const db = firebase.database().ref();

function updateDB(e){
    e.preventDefault();
    const text = textElement.value;
    const amount = amountElem.value;

    textElement.value = ""
    amountElem.value = '';

    let value = {
        Text: text,
        Amount: amount
    }

    db.push(value);
}



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


