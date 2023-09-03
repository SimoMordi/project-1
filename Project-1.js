console.log("Let's start");

const addListBtn = document.getElementById('addListBtn');
const listTitleInput = document.getElementById('listTitle');
const cards = document.querySelector('.cards');

const prioritySelect = document.getElementById('Priority');
const TypeOfNotes = document.getElementById('TypeOfNotes');


addListBtn.addEventListener('click', () => {
    const listTitle = listTitleInput.value.trim();
    const selectedPriority = prioritySelect.value;
    const selectedType = TypeOfNotes.value;

    if (listTitle) {
        // Create the entire list container
        const newList = document.createElement('div');
        newList.classList.add('list');

        const titleCard = document.createElement('button');
        titleCard.textContent = listTitle;
        newList.appendChild(titleCard);

        const priorityElement = document.createElement('h5')
        priorityElement.textContent = selectedPriority
        newList.appendChild(priorityElement)

        const typeElement = document.createElement('h5')
        typeElement.textContent = selectedType
        newList.appendChild(typeElement)


        const cardsContainer = document.createElement('ul');
        newList.appendChild(cardsContainer);
        
        const cardInput = document.createElement('input');
        cardInput.type = 'text';
        cardInput.placeholder = 'Enter card description...';
        newList.appendChild(cardInput);
        
        const addCardBtn = document.createElement('button');
        addCardBtn.textContent = 'Add Card';
        addCardBtn.addEventListener('click', () => {
            const description = cardInput.value.trim();

            if (description) {
                const newCard = document.createElement('li');
                newCard.textContent = description;
                cardsContainer.appendChild(newCard);
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    cardsContainer.removeChild(newCard);
                });
                newCard.appendChild(deleteBtn);

                cardInput.value = '';
            } else {
                alert('Please enter a card description.');
            }
        });
        newList.appendChild(addCardBtn);
        
        cards.insertBefore(newList, cards.lastChild);
        
        listTitleInput.value = '';
    } else {
        alert('Please enter a list title.');
    }
});

