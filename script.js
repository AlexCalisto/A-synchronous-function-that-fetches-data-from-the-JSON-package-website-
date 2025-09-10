// Async function to fetch and display users
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Select 1st, 7th, and last user
    const selectedUsers = [
      users[0],
      users[6],
      users[users.length - 1]
    ];

    const container = document.getElementById("card-container");

    selectedUsers.forEach(user => {
      // Create card element
      const card = document.createElement("div");
      card.classList.add("profile-card");

      // Fill card with user details
     card.innerHTML = `
  <h2><span class="label">Name:</span> ${user.name.toUpperCase()}</h2>
  <p class="username"><span class="label">Username:</span> @${user.username.toUpperCase()}</p>
  <p class="email"><span class="label">Email:</span> ${user.email.toLowerCase()}</p>
`;


      // Add card to container
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Run the function
loadUsers();
