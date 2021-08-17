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

// const categories = 
const textElement = document.querySelector("#text")
const amountElem = document.querySelector("#amount")
const category2 = document.getElementById("category");
const buttonref = document.querySelector("#button");
buttonref.addEventListener("click", updateDB);

let history = document.querySelector(".history");
const db = firebase.database().ref();
const auth = firebase.auth();
var currentUser = {}


function createPost(text, categorical, amount){
    let div = document.createElement("div")
    div.setAttribute("class", "transaction");
    let p = document.createElement("p");
    p.setAttribute("id", "p1");
    let p2 = document.createElement("p");
    p2.setAttribute("id", "p2");
    let p3 = document.createElement("p");
    p3.setAttribute("id", "p3");
    let delete_button = document.createElement('button')
    delete_button.setAttribute('class', 'delete-btn') 
    delete_button.innerHTML = 'x'

    if (amount > 0) {
        div.className += ' transaction--plus';
    }
    else {
        div.className += ' transaction--minus';
    }


    p.textContent = text;
    p2.textContent = "Category: " + categorical;
    p3.textContent = amount;
    
    div.appendChild(delete_button)
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    console.log(div.className)
    if (history.innerHTML === ""){
        console.log(true);
    }
    history.insertBefore(div, history.firstChild);


}

function deletePosts() {
    delete_button.addEventListener('click', function() {
        //I added this last night. this is where your would delete transactions and i wanted to make it for you early so here you go.
    })
}

// function getPosts(){
//     db.on("child_added", function(rowData){
//         let row = rowData.val();
//         console.log(row)
//         createPost(
//             row.Text,
//             row.Categories,
//             row.Amount
//         );
//     })
// }

// getPosts();
// let userId;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      currentUser = user;
      writeUserData(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
});


function updateDB(e){
    e.preventDefault();
    const text = textElement.value;
    const amount = amountElem.value;
    const categ = category2.value;

    textElement.value = ""
    amountElem.value = '';

    let value = {
        userId: currentUser.uid,
        Text: text,
        Amount: amount,
        Categories: categ
    }
    firebase.database().ref("heroes/" + value.userId).set(value)
    firebase.database().ref("users/" + currentUser.uid + /heroes/ + value.userId).set(value)
    createPost(value.Text, value.Categories, value.Amount);
}

$("#logout").click(function(){
    auth.signOut();
    console.log("logged out")
})

    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDay() + 15;
    let year = date.getFullYear();
    let current_date = "date created: " + month + "/" + day + '/' + year;
    document.querySelector(".date").innerHTML = current_date
    
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
        rec_date = document.createElement('p');
        rec_date.className = 'date'
        rec_date.innerHTML = current_date
        description = document.createElement('p');
        description.className = 'plan__description';
        description.innerHTML = "this is placeholder text for when we can dynamically add the user's recommendation data "
    
        plan.appendChild(card);
        card.appendChild(header);
        header.appendChild(h3);
        header.appendChild(rec_date)
        header.appendChild(description)
    
        body = document.querySelector('body');
    
        body.appendChild(plan)
    
    })
