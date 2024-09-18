const users = {
    "user1": {
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "projects": [
            { "name": "Gmail Project", "from": "Marketing", "to": "Development", "subject": "Campaign Updates" },
            { "name": "Cloud Migration", "from": "Operations", "to": "IT", "subject": "Migration Plan" }
        ]
    },
    "user2": {
        "name": "Bob Smith",
        "email": "bob@example.com",
        "projects": [
            { "name": "Security Enhancement", "from": "Security", "to": "IT", "subject": "New Protocols" },
            { "name": "Network Optimization", "from": "Infrastructure", "to": "Networking", "subject": "Network Upgrades" }
        ]
    }
};

// Show Login Form Modal
function showLoginForm() {
    window.location.href = "login.html";
}

// Switch to Signup Form
function switchToSignup() {
    document.querySelector('.login-form-container').style.transform = 'translateX(-100%)';
    document.querySelector('.signup-form-container').style.transform = 'translateX(0)';
}

// Switch to Login Form
function switchToLogin() {
    document.querySelector('.login-form-container').style.transform = 'translateX(0)';
    document.querySelector('.signup-form-container').style.transform = 'translateX(100%)';
}

// Handle Login
function login() {
    const userId = document.getElementById('userId').value
}

// Toggle Navbar (Responsive)
function toggleNavbar() {
    document.querySelector('.nav-list').classList.toggle('active');
}

