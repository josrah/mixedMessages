/* For this project, you will build a message generator 
program. Every time a user runs a program, they should 
get a new, randomized output. To make your program truly 
random, the message that it outputs should be made up of 
at least three different pieces of data. Take what you 
know of JavaScript syntax so far to build the program 
and customize it to your liking. */

//Where is my phone? Message consists of preposition, room, and furniture
prepositions = ["above", "across", "along", "around", "at", "behind", "below", "beneath", "beside", "beyond", "by", "off", "on", "opposite", "over", "past", "under"];
rooms = ["attic", "basement", "bathroom", "bedroom", "boiler room", "cloakroom", "common room", "dining room", "family room", "garage", "guest room", "gym", "hallway", "kitchen", "laundry room", "library", "living room", "lounge", "nursery", "office", "pantry", "wine cellar"];
furnitures = ["amrchair", "bassinet", "bean bag chair", "bed", "bench", "bookshelf", "bunk bed", "cabinet", "carpet", "chair", "couch", "cupboard", "curtains", "desk", "dresser", "end table", "futon", "hammock", "hutch", "kitchen island", "lamp", "lounge chair", "mirror", "mattress", "office chair", "ottoman", "pillow", "sofa", "sideboard", "table", "vanity", "wardrobe", "waterbed"];

//Function that randomizes each of the words, and puts them together to a message
function generateMessage () {
    let preposition = prepositions[Math.floor(Math.random()*prepositions.length)];
    let room = rooms[Math.floor(Math.random()*rooms.length)];
    let furniture = furnitures[Math.floor(Math.random()*furnitures.length)];
    return `${preposition} the ${room} ${furniture}`;
}

console.log(generateMessage);