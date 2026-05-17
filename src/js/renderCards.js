import { getPicture } from "./api";
import { isFavorite } from "./notes";

// when rendering cards, we check if our book is in the bookmarks, and if it changes the button value. We also get the cover
function createBookCard(book) {    
    const coverUrl = getPicture(book.cover_i, 'M');
    const coverHtml = coverUrl
        ? `<img src="${coverUrl}" alt="cover" class="book-cover">`
        : '<div class="book-cover no-cover">No cover</div>';

    const inFav = isFavorite(book.key);
    const btnText = inFav ? '🗑 Remove from notes' : '📌 Add in notes';
    const btnClass = inFav ? 'addNotes remove' : 'addNotes'

    const bookHtml = `
                <div data-key="${book.key}" class="book-card">
                    ${coverHtml}
                    <div class="book-info">
                        <h3 class="book-title">${book.title || 'No title'}</h3>
                        <p class="book-author">${book.author_name ? book.author_name.join(', ') : 'Unknown author'}</p>
                        <p class="book-year">${book.first_publish_year || 'Unknown year'}</p>
                        <button class="${btnClass}">${btnText}</button>
                    </div>
                </div>
            `;
            return bookHtml
}


// transmitting data and position for the card rendering
export function renderBooks(container,books){    
    container.innerHTML='';
    books.forEach(book=>{
        container.insertAdjacentHTML('beforeend',createBookCard(book));
    })
}