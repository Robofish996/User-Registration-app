/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register")[0];
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users")[0];
console.log(userTabs);


/* --- Nav references --- */

const usersTabButton = document.getElementById("users-tab-button");
const registerTabButton = document.getElementById("register-tab-button");


/* --- Form field references --- */

const registerForm = document.getElementById("register-form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


/* --- Table list reference --- */

const userList = document.getElementById("user-list");


/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

function createUserEntry(firstName, lastName, username, email, password) {
  // Create list item element
  const listItem = document.createElement("li");
  listItem.classList.add("entry");

  // Create span elements for each field
  const usernameSpan = document.createElement("span");
  const firstNameSpan = document.createElement("span");
  const lastNameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const passwordSpan = document.createElement("span");

  // Set text content for each field
  usernameSpan.textContent = username;
  firstNameSpan.textContent = firstName;
  lastNameSpan.textContent = lastName;
  emailSpan.textContent = email;
  passwordSpan.textContent = password;

  // Append span elements to list item
  listItem.appendChild(usernameSpan);
  listItem.appendChild(firstNameSpan);
  listItem.appendChild(lastNameSpan);
  listItem.appendChild(emailSpan);
  listItem.appendChild(passwordSpan);

  // Append list item to user list
  userList.appendChild(listItem);
}


/* ----------------------------------------------------
    Event Listeners and Interactivity
---------------------------------------------------- */

// Show register tab by default
registerTab.style.display = "block";
userTabs.style.display = "none";

// Switch to user list tab
usersTabButton.addEventListener("click", function() {
  userTabs.style.display = "block";
  registerTab.style.display = "none";
});

// Switch to register tab
registerTabButton.addEventListener("click", function() {
  registerTab.style.display = "block";
  userTabs.style.display = "none";
});

// Submit registration form
registerForm.addEventListener("submit", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get input values
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create user entry
  createUserEntry(firstName, lastName, username, email, password);

  // Clear form fields
  firstNameInput.value = "";
  lastNameInput.value = "";
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
