import { renderBooks } from "./renderCards";


// from the array that loads the last thing that was opened, we filter by authors. we don't receive an array, so the filter will work instantly
export function filterByAuthor(inp,container,currentBook){
    const authorQuery = inp.value.trim().toLowerCase();
    if(!authorQuery){
        renderBooks(container,currentBook);
        return;
    }

    const filtered = currentBook.filter(book=>{
        if(!book.author_name) return false;
        return book.author_name.some(name=>name.toLowerCase().includes(authorQuery));
    });

    if (filtered.length === 0) {
        app.innerHTML = '<p>❌ Author not found</p>';
    } else {
        renderBooks(app, filtered);
    }

}