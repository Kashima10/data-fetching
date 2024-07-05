document.getElementById('fetch-button').addEventListener('click', fetchUserData);

function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            displayUserData(data.results[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayUserData(user) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
        <div class="user-card">
            <img src="${user.picture.large}" alt="User Picture">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
        </div>
    `;
}
