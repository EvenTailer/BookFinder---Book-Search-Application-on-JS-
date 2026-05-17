import { getFavorites, delFavorite,isFavorite } from "./notes";


// when opening bookmarks, we render our data from the saved array
export function renderNotes(docs) {
    const container = document.getElementById('drawerContent');
    const favorites = getFavorites();
    if (!favorites.length) {
        container.innerHTML = '<p>No favorite books yet</p>';
        return
    } else {
        container.innerHTML = "";
        favorites.forEach(book => {

            const coverHtml = book.cover
                ? `<img src="${book.cover}" class="book-cover">`
                : '<div class="book-cover no-cover">No cover</div>';
            const card = `
            <div data-key="${book.key}" class="book-card drawer-book-card style ="width:100px">
                ${coverHtml}
                <div class="book-info">
                    <h4 class="book-title">${book.title}</h4>
                    <p class="book-author">${book.author}</p>
                    <p class="book-year">${book.year}</p>
                    <button class="remove-fav-btn" data-key="${book.key}">Remove</button>
                </div>
            </div>
        `;
            container.insertAdjacentHTML('beforeend', card);
        });
    }

    // add through target, when you click the delete from bookmarks button and prerender notes and open main
    container.addEventListener('click', event => {
        const button = event.target.closest('.remove-fav-btn');
        if (!button) return;
        const card = button.closest('.book-card');
        const key = card.dataset.key;
        delFavorite(key);
        renderNotes()
        updateAllBookButtons()

    })


}
// after removing the bookmarks, go through the open main page and change the value of the buttons
function updateAllBookButtons(){
    const cards =document.querySelectorAll('#app .book-card');
    cards.forEach(card =>{
        const key = card.dataset.key;
        const button = card.querySelector('.addNotes');
        if(!button) return;
        const inFav = isFavorite(key);
        button.textContent = inFav ? '🗑 Remove from notes' : '📌 Add in notes';
        if (inFav) {
            button.classList.add('remove');
        } else {
            button.classList.remove('remove');
        }
    })
}