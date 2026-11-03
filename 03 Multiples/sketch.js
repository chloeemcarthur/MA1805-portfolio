// global variables
let statements = [ // define an array of statements
  "I agree to the terms and conditions.", 
  "I agree to accept all cookies.",
  "I agree to being observed.",
  "I agree to share my preferences.",
  "I agree to be categorised.",
  "I agree to receive notifications.",
  "I agree to be predictable.",
  "I agree to being measured.",
  "I agree not to read these terms.",
  "I agree to be shown more advertisements.",
  "I agree to surrender my attention.",
  "I agree to future changes to this agreement.",
  "I agree to keep scrolling.",
  "I agree that my data is valuable.",
  "I agree to receive more agreements.",
  "I agree to be tracked.",
  "I agree to be profiled.",
  "I agree to be monetised.",
  "I agree to agree to this agreement.",
  "I agree that I have no choice.",
  "I agree."
]; // end of array
let agreements = []; // define an empty array to hold the displayed agreements
let nextStatement = 0; // define a variable to hold the index of the next statement to display
// values for arranging the agreement cards in a grid
let margin = 25; // define a variable to hold the margin around the grid
let gap = 12; // define a variable to hold the gap between the agreement cards
let boxHeight = 100; // define a variable to hold the height of each agreement card
let startY = 155; // define a variable to hold the starting y position of the grid

function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
  textFont('Arial'); // set the font to Arial

  // start with the first four agreements
  for (let i = 0; i < 4; i++) { // loop through the first four statements
    addAgreement(); // add the agreement to the agreements array
  } // end of for loop

  updateCanvasHeight(); // update the canvas height based on the number of agreements
} // end of setup function

function addAgreement() { // addAgreement function
  agreements.push({ // add a new agreement to the agreements array
    message: statements[nextStatement % statements.length], // get the next statement from the statements array, using modulo to loop back to the start if we reach the end
    checked: false // set the checked property to false
  }); // end of push

  nextStatement++; // increment the nextStatement index
} // end of addAgreement function

function numberOfColumns() { // numberOfColumns function
  if (windowWidth < 600) { // if the window width is less than 600 pixels
    return 1; // return 1 column
  } else if (windowWidth < 950) { // if the window width is less than 950 pixels
     return 2; // return 2 columns
  } else { // if the window width is greater than or equal to 950 pixels
     return 3; // return 3 columns
  } // end of if statement
} // end of numberOfColumns function

function getBoxPosition(i) { // getBoxPosition function
  let columns = numberOfColumns(); // get the number of columns
  let boxWidth = (width - margin * 2 - gap * (columns - 1)) / columns; // calculate the width of each box
  let column = i % columns; // modulo the index by the number of columns to get the column number
  let row = floor(i / columns); // divide the index by the number of columns and round down to get the row number
  return { // return an object with the x and y position of the box
    x : margin + column * (boxWidth + gap), // calculate the x position of the box
    y : startY + row * (boxHeight + gap), // calculate the y position of the box
    w : boxWidth, // set the width of the box
  }; // end of return
} // end of getBoxPosition function

function draw() { // draw function
  background(255); // set the background to white

  // draw the title
  noStroke(); // disable stroke
  fill(20); // set the fill color to dark gray
  textSize(32); // set the text size to 32 pixels
  textStyle(BOLD); // set the text style to bold
  textAlign(LEFT, TOP); // set the text alignment to left and top
  text("I AGREE", margin, 30); // draw the title at the top of the canvas
  
  // draw the instructions
  textStyle(NORMAL); // set the text style to normal
  textSize(16); // set the text size to 16 pixels
  text("Please accept the following conditions to continue.", margin, 80); // draw the instructions below the title

  // count the accepted agreements
  let accepted = 0; // define a variable to hold the number of accepted agreements

  for (let i = 0; i < agreements.length; i++) { // loop through the agreements array
    if (agreements[i].checked) { // if the agreement is checked
      accepted++; // increment the accepted counter
    } // end of if statement
  } // end of for loop

  // draw agreements accepted counter
  fill(100); // set the fill color to gray
  text ( 
    accepted + " accepted / " + agreements.length + " total", margin, 115
  ); // draw the accepted counter

  // draw the agreements
  for (let i = 0; i < agreements.length; i++) { // loop through the agreements array
    let agreement = agreements[i]; // get the current agreement
    let pos = getBoxPosition(i); // get the position of the box for the current agreement

    // agreement card
    stroke(180); // set the stroke color to gray
    strokeWeight(1); // set the stroke weight to 1 pixel
    fill(agreement.checked ? color(200, 255, 200) : 255); // set the fill color to light green if checked, otherwise white
    rect(pos.x, pos.y, pos.w, boxHeight, 5); // draw the agreement card with rounded corners

    // checkbox
    fill(255); // set the fill color to white
    stroke(60); // set the stroke color to dark gray
    rect(pos.x + 18, pos.y + 34, 24, 24); // draw the checkbox

    // display tick mark if checked
    if (agreement.checked) { // if the agreement is checked
      stroke(20, 140, 70); // set the stroke color to dark green
      strokeWeight(3); // set the stroke weight to 3 pixels
      line(pos.x + 22, pos.y + 46, pos.x + 28, pos.y + 53); // draw the first line of the tick mark
      line(pos.x + 28, pos.y + 53, pos.x + 39, pos.y + 39); // draw the second line of the tick mark
    } // end of if statement

    // agreement text
    noStroke(); // disable stroke
    fill(20); // set the fill color to dark gray
    textSize(14); // set the text size to 14 pixels
    text( 
      agreement.message, pos.x + 54, pos.y + 37, pos.w - 65, 65
    ); // draw the agreement text within the box, with some padding
  } // end of for loop 
} // end of draw function

function mousePressed() { // mousePressed function
  for (let i = 0; i < agreements.length; i++) { // loop through the agreements array
    let pos = getBoxPosition(i); // get the position of the box for the current agreement
    if (mouseX > pos.x && mouseX < pos.x + pos.w && mouseY > pos.y && mouseY < pos.y + boxHeight) { // check if the mouse is within the agreement box area
      if (!agreements[i].checked) { // if the agreement is not checked
        agreements[i].checked = true; // check the agreement
        addAgreement(); // add a new agreement to the agreements array
        addAgreement(); // add another new agreement to the agreements array
        updateCanvasHeight(); // update the canvas height based on the number of agreements
      } // end of if statement
      break; // exit the loop after checking one agreement
    } // end of if statement
  } // end of for loop 
} // end of mousePressed function

// update the canvas height based on the number of agreements
function updateCanvasHeight() { // updateCanvasHeight function
  let rows = ceil(agreements.length / numberOfColumns()); // calculate the number of rows needed based on the number of agreements and columns
  let requiredHeight = startY + rows * (boxHeight + gap) + 50; // calculate the required height of the canvas

  resizeCanvas(windowWidth, max(windowHeight, requiredHeight)); // resize the canvas to the required height or the window height, whichever is greater
} // end of updateCanvasHeight function

function windowResized() { // windowResized function
  updateCanvasHeight(); // update the canvas height based on the number of agreements
} // end of windowResized function
