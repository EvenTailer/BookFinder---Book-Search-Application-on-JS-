# BookFinder – Book Search Application

**Live demo:** [https://gramilya.xyz/booksApp/](https://gramilya.xyz/booksApp/)

BookFinder is a modern web application for searching books using the Open Library API. It allows you to find books by title, author, or keyword, view covers, save favorites, switch themes, and more. Built with pure JavaScript (ES6+), Vite, and Open Library API.

---
## How to run the app

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/EvenTailer/BookFinder---Book-Search-Application-on-JS-.git
   cd BookFinder---Book-Search-Application-on-JS-
Install dependencies

bash
npm install
Run development server

bash
npm run dev
Open http://localhost:5173 in your browser.

Create a production build

bash
npm run build
The optimized output will be placed in the dist folder. It contains exactly three components: index.html, assets/index.js, and an assets folder with icons.

Preview the built app locally

bash
npm run preview
Features (What you can do on this site)
Search books by title, author, or keyword (manual button + automatic debounced search after 3 seconds).

View book cards – each card shows a cover (or a placeholder), title, author(s), and first publish year.

Favorites – add or remove books to/from favorites; the list is saved in localStorage and persists after page reload.

Filter by author – client‑side filtering of the currently displayed books by author name (no extra API calls).

Genre browsing – left burger menu opens a panel with genres (Romance, Fantasy, Science). Selecting a genre loads books via the Open Library Subjects API.

Dark / Light theme – toggle themes; your choice is saved.

About Project modal – contains information about the technologies and how to run the app.

Responsive design – works on desktop, tablet, and mobile devices.

Project structure (optional, plus)
text
js-books-app/
├── src/                     # source code
│   ├── assets/              # icons and static images
│   ├── js/                  # all JavaScript modules
│   │   ├── aboutProject.js  # renders the "About Project" modal
│   │   ├── api.js           # Open Library API calls (search, subjects, covers)
│   │   ├── debounce.js      # debounce utility and auto‑search
│   │   ├── filterByAuthor.js# client‑side author filtering
│   │   ├── main.js          # entry point, event listeners, initialization
│   │   ├── notes.js         # favorites management (localStorage)
│   │   ├── renderCards.js   # creates book card HTML and renders lists
│   │   └── renderNotes.js   # renders favorites inside the right drawer
│   ├── styles/              # CSS (during development)
│   └── index.html           # main HTML file
├── public/                  # public assets (favicon)
├── dist/                    # production build (generated)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
Technologies used
HTML5, CSS3 (Flexbox, Grid, CSS Variables)

JavaScript (ES6+)

Vite (build tool)

Fetch API

localStorage

Open Library API

Links
Live demo: https://gramilya.xyz/booksApp/

GitHub repository: https://github.com/EvenTailer/BookFinder---Book-Search-Application-on-JS-.git

Author: Ilya Grammatik (GitHub)