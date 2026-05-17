# 📚 BookFinder – поиск книг через Open Library

A feature-rich vanilla JavaScript application that lets you search for books by title, author or keyword, view book details (cover, author, year), save favorites, filter by author, browse genres, and switch themes – all powered by the **Open Library API**.

🌐 **Live Demo:** [https://gramilya.xyz/booksApp/](https://gramilya.xyz/booksApp/)

---
## ✨ Features

- **🔍 Instant Search** – by title, author, or keyword. Manual search button + automatic debounced search (3 seconds delay).
- **📖 Book Cards** – display cover (or placeholder), title, author(s), first publish year.
- **⭐ Favorites** – add/remove books; stored in `localStorage`, persists after page reload.
- **🎨 Filter by Author** – client‑side filtering of the current book list without extra API calls.
- **🍔 Genre Browsing** – left burger menu: Romance, Fantasy, Science. Fetches books via Open Library Subjects API.
- **🌙 Dark/Light Theme** – toggle themes; choice saved in `localStorage`.
- **ℹ️ About Project** – modal window with tech stack and run instructions.
- **📱 Fully Responsive** – works seamlessly on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **HTML5**, **CSS3** (Grid, Flexbox, CSS Variables)
- **JavaScript (ES6+)** (modules, async/await, Fetch API)
- **Vite** – build tool and dev server
- **Open Library API** – book search, covers, subjects
- **localStorage** – favorites and theme persistence
- **Debounce & AbortController** – search optimisation

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
git clone https://github.com/EvenTailer/BookFinder---Book-Search-Application-on-JS-.git
cd BookFinder---Book-Search-Application-on-JS-
npm install
npm run dev
Open http://localhost:5173 to see the app.

Build for production
bash
npm run build
The output will be in the dist folder – ready to deploy.

Preview production build
bash
npm run preview
📁 Project Structure
text
js-books-app/
├── src/
│   ├── assets/          # icons, static images
│   ├── js/              # all JavaScript modules
│   │   ├── aboutProject.js
│   │   ├── api.js
│   │   ├── debounce.js
│   │   ├── filterByAuthor.js
│   │   ├── main.js
│   │   ├── notes.js
│   │   ├── renderCards.js
│   │   └── renderNotes.js
│   ├── styles/          # CSS (development only)
│   └── index.html
├── public/
├── dist/                # production build (generated)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
JavaScript modules (src/js/)
File	Purpose
main.js	Entry point, DOM elements, event listeners, init.
api.js	Open Library API calls (search, subjects, covers).
notes.js	Favorites management (localStorage, add, remove, toggle).
renderCards.js	Generates book card HTML and renders lists.
renderNotes.js	Renders favorites list inside the right drawer.
debounce.js	Debounce utility and auto‑search function.
filterByAuthor.js	Client‑side filter by author name.
aboutProject.js	Displays the "About Project" modal.
🔑 Task (Assignment)
This project was developed as part of a technical assignment. The full task description is available at:

🔗 [Link to the task document] (please insert the actual URL provided by your instructor)

🌟 Future Improvements
Add pagination for search results and genre pages.

Show author photos and detailed book descriptions (via Works API).

Implement book rating or reviews (if API provides).

Add a "Random book" feature.

📄 License
MIT

🙏 Acknowledgements
Open Library API for providing free book data.

Icons and design inspired by modern book discovery apps.

Made with ❤️ by Ilya Grammatik
GitHub