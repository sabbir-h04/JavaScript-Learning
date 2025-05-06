let adjectives = {
    "1" : "Crazy",
    "2" : "Amazing",
    "3" : "Fire"
}
let shopName = {
    "1" : "Engine",
    "2" : "Food",
    "3" : "Garments"
}
let anotherWord = {
    "1" : "Bros",
    "2" : "Limited",
    "3" : "Hub"
}

let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;
let random3 = Math.floor(Math.random() * 3) + 1;

let businessName = `${adjectives[random1]} ${shopName[random2]} ${anotherWord[random3]}`;
alert(`Name for your Business: ${businessName}`)
