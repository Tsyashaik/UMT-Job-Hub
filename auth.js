function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alertBox");
  alertBox.textContent = message;
  alertBox.className = `alert ${type} show`;
  setTimeout(() => {
    alertBox.classList.add("hidden");
    alertBox.classList.remove("show");
  }, 3000);
}

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!username || !password) {
    return showAlert("Please fill in both fields.", "error");
  }
  const user = { username, password };
  localStorage.setItem("umtUser", JSON.stringify(user));
  localStorage.setItem("username", username);
  showAlert("Registered successfully! You can now login.", "success");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const stored = JSON.parse(localStorage.getItem("umtUser"));
  if (stored && username === stored.username && password === stored.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    showAlert("Login successful! Redirecting...", "success");
    setTimeout(() => window.location.href = "home.html", 1000);
  } else {
    showAlert("Invalid username or password.", "error");
  }
}

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter a username and password to register.");
    return;
  }

  // Simpan username & password ke localStorage (untuk demo sahaja, bukan untuk production!)
  localStorage.setItem("registeredUsername", username);
  localStorage.setItem("registeredPassword", password);

  // Auto login
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);

  // Redirect ke home
  window.location.href = "home.html";
}

