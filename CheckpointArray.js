const hobbiesList = document.getElementById('hobbies-list');
const editButton = document.getElementById('edit-button');
const addFriendHobbiesButton = document.getElementById('add-friend-hobbies-button');

let hobbies = [];

function renderHobbies() {
    hobbiesList.innerHTML = '';
    hobbies.forEach((hobby, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = hobby;
        hobbiesList.appendChild(listItem);
    });
}

function editHobby() {
    const hobbyNumber = prompt('Digite o número do hobby que deseja editar:');
    const newHobby = prompt('Digite o novo hobby:');
    
    // Convertendo o número do hobby para índice subtraindo 1
    const index = parseInt(hobbyNumber) - 1;

    if (index >= 0 && index < hobbies.length) {
        hobbies[index] = newHobby;
        renderHobbies();
    } else {
        alert('Número inválido.');
    }
}


function addFriendHobbies() {
    const friendHobbies = prompt('Digite os seus hobbies  (separados por vírgula):');
    const friendHobbiesArray = friendHobbies.split(',').map(hobby => hobby.trim());
    if (friendHobbiesArray.length === 4) {
        hobbies = hobbies.concat(friendHobbiesArray);
        renderHobbies();
    } else {
        alert('Por favor, digite exatamente 4 hobbies para o seu amigo.');
    }
}

editButton.addEventListener('click', editHobby);
addFriendHobbiesButton.addEventListener('click', addFriendHobbies);




