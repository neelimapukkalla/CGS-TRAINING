function showPasswordStep() {
    document.getElementById('emailStep').style.display = 'none';
    document.getElementById('passwordStep').style.display = 'block';
}

function showGenderStep() {
    document.getElementById('passwordStep').style.display = 'none';
    document.getElementById('genderStep').style.display = 'block';
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    if (email && password && gender) {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Gender:', gender);
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
