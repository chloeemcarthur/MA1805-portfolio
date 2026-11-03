// global variables
let phrases = [ // array containing unsent messages
"I almost told you.",
"Are you still awake?",
"It's fine.",
"I don't know how to say this.",
"Don't worry about it.",
"Are you mad at me?",
"I miss you.",
"I was typing...",
"Actually, never mind.",
"Can we talk?",
"I deleted it.",
"I'm sorry.",
"I wish I had sent this.",
"Are you there?",
"Are you okay?"
]; // end of array

let messages = []; // array to hold the messages that will be displayed

function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
  textFont('Georgia'); // set the font to Georgia
  textAlign(CENTER, CENTER); // set the text alignment to center
  
  // create 18 messages when the sketch starts
  for (let i = 0; i < 18; i++) { // loop 18 times
    messages.push(createMessage()); // add a new message to the messages array
   } // end of for loop
} // end of setup function

function createMessage() { // createMessage function
  return { // create an object with random properties for the message
    phrase: random(phrases), // select a random phrase from the phrases array
    x: random(width * 0.1, width * 0.9), // set a random x position within 10% to 90% of the canvas width
    y: random(height * 0.1, height * 0.9), // set a random y position within 10% to 90% of the canvas height
    speedX: random(-0.6, 0.6), // set a random horizontal speed between -0.6 and 0.6
    speedY: random(-0.4, 0.4), // set a random vertical speed between -0.4 and 0.4
    age: 0, // initialize the age of the message to 0
    lifespan: random(240, 480), // set a random lifespan between 240 and 480 frames
    size: random(16, 24) // set a random font size between 16 and 24
  }; // end of return
} // end of createMessage function

function draw