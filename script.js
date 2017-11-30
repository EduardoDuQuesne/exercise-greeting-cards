// OBJECTS
let adultBirthday = {
  name: "adultBirthday",
  front: "Happy Birthday Adult!",
  inside: "Insert joke about how old you're getting!"
}
let childBirthday = {
  name: "childBirthday",
  front: "Happy Birthday Kid!",
  inside: "Insert joke about how young you are!"
}
let valentine = {
  name: "valentine",
  front: "Happy Valentines Day!",
  inside: "This is a super romantic card!"
}
let merryChristmas = {
  name: "merryChristmas",
  front: "Merry Christmas!",
  inside: "Ho Ho Ho! Here's a bag of coal!"
}
let fourthJuly = {
  name: "fourthJuly",
  front: "Happy B-Day America!",
  inside: "Time to light those fireworks!"
}
//Store DOM DIVs to variables
let frontDiv = document.getElementById("front");
let insideDiv = document.getElementById("inside");

//  Card Maker Constant
const CardMaker = {
  makeFrontMessage: function(string) {
    console.log('createCardFront ' + string.name);
    //  create div
    let newDiv = document.createElement("div"); 
    // add class to div and class for specific styling
    newDiv.className += 'createCardFront ' + string.name;
    //create h2 element
    let frontCardHeading = document.createElement("h2");
    //
    let newContent = document.createTextNode(string.front);
    // add string to h2  
    frontCardHeading.appendChild(newContent);
    //add to new div
    newDiv.appendChild(frontCardHeading);
    //add to html div
    frontDiv.appendChild(newDiv);
  },
  makeInsideMessage: function(string) {
    //  create div
    let newDiv = document.createElement("div"); 
    // add id to div and class for specific styling
    newDiv.className += 'createCardInside ' + string.name;
    //create h4 element
    let insideCardCont = document.createElement("h4");
    //
    let newContent = document.createTextNode(string.inside);
    // add string to h4  
    insideCardCont.appendChild(newContent);
    //add to new div
    newDiv.appendChild(insideCardCont);
    //add to html div
    insideDiv.appendChild(newDiv); 
     
  }
};

//Link object to cardMaker
const greetingCards = Object.create(CardMaker);

//Call both object functions at the same time
function createCard(object) {
    greetingCards.makeFrontMessage(object);
    greetingCards.makeInsideMessage(object);
};

// Make function Call
createCard(adultBirthday);
createCard(merryChristmas);
createCard(fourthJuly);
createCard(childBirthday);
createCard(valentine);
