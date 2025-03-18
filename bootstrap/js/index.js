
  // Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Perform login validation (e.g., API call, check credentials)
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Close the modal
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      loginModal.hide();
    } else {
      alert('Invalid username or password.');
    }
  });

  // Sign Up Form Submission
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Perform signup actions (e.g., API call, save user data)
    alert('Signup successful!');
    // Close the modal
    const signupModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    signupModal.hide();
  });

  
