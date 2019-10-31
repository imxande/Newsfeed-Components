/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// menu function 
function menu(arr){
  // creating a div
  const myMenuDiv = document.createElement('div');

  // creating a ul 
  const myList = document.createElement('ul');

  // Setup structure of elements
  myMenuDiv.appendChild(myList);

  // adding class 
  myMenuDiv.classList.add('menu');

  // creating empty array
  let liItem = [];

  // forEach the array to create li element and  setting up its structure 
  arr.forEach((item, index)  => {
     liItem[index] = document.createElement('li');
     myList.appendChild(liItem[index]);
     liItem[index].textContent = item;

  })

  // selecting the class menu-button
  const menuBtn = document.querySelector('.menu-button');
  
  // event listener 
  menuBtn.addEventListener('click', () => {
    myMenuDiv.classList.toggle('menu--open');
    console.log(myMenuDiv);
 })

  return myMenuDiv;
}

// selecting the header class 
const header = document.querySelector('.header');

// Setup structure of element
header.appendChild(menu(menuItems));