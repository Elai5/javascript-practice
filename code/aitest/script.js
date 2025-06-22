/** @format */

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    showMessage("Login failed: fields cannot be empty");
  } else {
    showMessage("Login successful (simulated)");
  }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (username === "" || email === "" || password === "") {
    showMessage("Signup failed: fields cannot be empty");
  } else {
    showMessage("Signup successful (simulated)");
  }
});

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}


function testLoginFormEmptyFields() {
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginForm").dispatchEvent(new Event("submit", { bubbles: true }));
  const message = document.getElementById("message").innerText;
  console.assert(message === "Login failed: fields cannot be empty", "Test failed: Empty login form");
}

function testSignupFormValidInput() {
  document.getElementById("signupUsername").value = "Elaine";
  document.getElementById("signupEmail").value = "elaine@example.com";
  document.getElementById("signupPassword").value = "password123";
  document.getElementById("signupForm").dispatchEvent(new Event("submit", { bubbles: true }));
  const message = document.getElementById("message").innerText;
  console.assert(message === "Signup successful (simulated)", "Test failed: Signup with valid input");
}

// Run tests
testLoginFormEmptyFields();
testSignupFormValidInput();
