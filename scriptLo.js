document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const logoutSection = document.getElementById('logout-section');
    const logoutButton = document.getElementById('logout-button');
    const userNameSpan = document.getElementById('user-name');

    
    if (sessionStorage.getItem('loggedInUser')) {
        showLogoutSection(sessionStorage.getItem('loggedInUser'));
    } else {
        showLoginSection();
    }

    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username && password) {
            sessionStorage.setItem('loggedInUser', username);
            showLogoutSection(username);
        } else {
            alert('Please enter both username and password.');
        }
    });

    
    logoutButton.addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        showLoginSection();
    });

    function showLoginSection() {
        loginSection.style.display = 'block';
        logoutSection.style.display = 'none';
    }

    function showLogoutSection(username) {
        loginSection.style.display = 'none';
        logoutSection.style.display = 'block';
        userNameSpan.textContent = username;
    }
});