// Handle navigation between Login and Register
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
  }
  
  function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.add('active');
  }
  
  // Simulate user database (in real scenarios, replace with backend calls)
  let users = [];
  
  // Handle registration
  function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    // Check if user already exists
    if (users.some(user => user.username === username)) {
      alert('Username already exists');
    } else {
      users.push({ name, username, password });
      alert('Registration successful! Redirecting to login page...');
  
      // Redirect to the login form after successful registration
      showLogin();  // Show the login form
    }
  }
  
  // Handle login
  function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Check credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      alert('Login successful. Redirecting to the car rentals website...');
  
      // Redirect to the car rental website after login
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  }
  