import { getSomething, getPicture, searchBookAPI, getGenres } from "./api";
import { autoSearch, debounce } from "./debounce";
import { toggleFavorite } from "./notes";
import { renderBooks } from "./renderCards";
import { renderNotes } from "./renderNotes";
import { filterByAuthor } from "./filterByAuthor";
import { aboutProject } from "./aboutProject";



//  needs Dom elements 
const app = document.getElementById('app');
const btnSearch = document.getElementById('btn-search');
const input = document.getElementById('search');

// an array that stores the last open cards on the page, through which the authors are filtered
export let currentBook = [];
export function changeCurrentBook(book) {
    currentBook = book;
}

// Elements for burger notes 
const burgerBtn = document.getElementById('burgerBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const overlay = document.getElementById('overlay');
const drawer = document.getElementById('drawer');

// Elements burgerMenu
const burgerMenuBtn = document.getElementById('burgerMenuBtn');
const genreMenu = document.getElementById('genreMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuOverlay = document.getElementById('menuOverlay');


// Loading get data
export function showLoader(container) {
    container.innerHTML = `
        <div class="loader-container">
            <div class="spinner"></div>
            <p>Loading books...</p>
        </div>
    `;
}


// showing a test for user visualization. the first thing a user sees when they open a website
function test(docs) {
    app.innerHTML = '';
    currentBook = docs;
    renderBooks(app, currentBook);
}

// cards are only displayed when we have received data
async function init() {
    showLoader(app)
    const booksData = await getSomething();
    if (booksData && booksData) {
        test(booksData);
    } else {
        app.innerHTML = '<p>No books found...</p>'
    }
}
init()


//  search for books and authors after clicking on the button
btnSearch.addEventListener('click', async (event) => {
    if (input.value.trim() !== '') {
        showLoader(app)
        let searchBooks = await searchBookAPI(encodeURIComponent(input.value));
        currentBook = searchBooks.docs
        input.value = '';
        app.innerHTML = '';
        renderBooks(app, currentBook);
    } else {
        alert('You dont wrote name of book')
    }
})

// we access the card through delegation and add or delete a note by clicking on the button
app.addEventListener('click', (event) => {
    const button = event.target.closest('.addNotes');
    if (!button) return;

    const card = button.closest('.book-card');
    const key = card.dataset.key;
    const title = card.querySelector('.book-title').innerText;
    const author = card.querySelector('.book-author').innerText;
    const year = card.querySelector('.book-year').innerText;
    const coverImg = card.querySelector('.book-cover')?.src || '';

    const bookData = { key, title, author, year, cover: coverImg }
    toggleFavorite(bookData, button)
});


// open panel with notes
function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    renderNotes();
    closeMenu()
}
// close panel with notes
function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
}

burgerBtn.addEventListener('click', openDrawer);
closeDrawerBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);


// add debounce, search book after 3 second automatic

const debouncedAutoSearch = debounce(async (query) => {
    const books = await autoSearch(query, app);
    if (books) currentBook = books
}, 3000);
input.addEventListener('input', event => {
    const query = input.value.trim();
    debouncedAutoSearch(query)
});


// change the main theme 
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});



//  open the genre menu
function openMenu() {
    genreMenu.classList.add('open');
    menuOverlay.classList.add('active');
    closeDrawer()
}
// close the genre menu
function closeMenu() {
    genreMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
}
burgerMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);


// when you click the button, we pass the parameter we need to get the required api and display it on the page
document.getElementById('genreRomance').addEventListener('click', () => {
    const app = document.getElementById('app');
    showLoader(app)
    getGenres('romance', app);
    closeMenu();
});
document.getElementById('genreFantasy').addEventListener('click', () => {
    const app = document.getElementById('app');
    showLoader(app)
    getGenres('fantasy', app);
    closeMenu();
});
document.getElementById('genreScience').addEventListener('click', () => {
    const app = document.getElementById('app');
    showLoader(app)
    getGenres('science', app);
    closeMenu();
});


//  when you enter text in the input, we filter our page by authors
const inputFilterAuthor = document.getElementById('filterAuthor');
inputFilterAuthor.addEventListener('input', () => {
    const app = document.getElementById('app');
    filterByAuthor(inputFilterAuthor, app, currentBook)
});

// show information about this project 
document.getElementById('aboutProjectBtn').addEventListener('click', event => {
    const app = document.getElementById('app');
    aboutProject()
})

