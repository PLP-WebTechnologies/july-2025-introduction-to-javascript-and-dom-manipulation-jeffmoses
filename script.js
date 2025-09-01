/* Mastering JavaScript Fundamentals */

//Part 1: Mastering JavaScript Basics


// Variable Declarations
const currentYear = 2025;
let userName = "Alex";
let userAge;

// Conditionals and User Input
// Using a simple prompt to capture user input.
// A more robust solution would use an HTML input field.
const birthYear = prompt("Please enter your birth year:");

// The `+` operator converts the string input to a number.
userAge = currentYear - +birthYear;

const part1Output = document.getElementById('part1-output');

if (userAge >= 18) {
    part1Output.textContent = `Welcome, ${userName}! You are an adult.`;
    console.log(`User is an adult. Age: ${userAge}`);
} else {
    part1Output.textContent = `Hello, ${userName}! You are a minor.`;
    console.log(`User is a minor. Age: ${userAge}`);
}


//Part 2: JavaScript Functions


// Custom Function 1: Calculates the area of a rectangle.
function calculateRectangleArea(width, height) {
    return width * height;
}

const area = calculateRectangleArea(10, 5);
console.log(`The area of a 10x5 rectangle is: ${area}`);

// Custom Function 2: Displays a personalized welcome message.
function displayWelcomeMessage(name) {
    const welcomeMessageElement = document.getElementById('welcome-message');
    welcomeMessageElement.textContent = `Hello, ${name}! The area of the rectangle is ${calculateRectangleArea(7, 8)}.`;
}

// Call the function to display the message on the page.
displayWelcomeMessage("Jordan");


//Part 3: JavaScript Loops

// Loop Example 1: A `for` loop to generate a countdown.
const countdownOutput = document.getElementById('countdown-output');
for (let i = 5; i > 0; i--) {
    const p = document.createElement('p');
    p.textContent = `Countdown: ${i}...`;
    countdownOutput.appendChild(p);
}

// Loop Example 2: `forEach` to iterate through an array and create a list.
const fruits = ['Apple', 'Banana', 'Cherry', 'Dates'];
const arrayList = document.getElementById('array-items');

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    arrayList.appendChild(li);
});


//  Part 4: Mastering the DOM


// DOM Interaction 1: Selecting elements
const toggleButton = document.getElementById('toggle-button');
const domTextElement = document.getElementById('dom-text');

// DOM Interaction 2 & 3: Event Listener and Modifying Content/Classes
toggleButton.addEventListener('click', function() {
    // Modify text content
    if (domTextElement.textContent.includes('clicked')) {
        domTextElement.textContent = "Click the button above to change my text and appearance!";
    } else {
        domTextElement.textContent = "You've clicked the button! The style has changed.";
    }

    // Toggle a CSS class to change styling
    domTextElement.classList.toggle('highlight');
});