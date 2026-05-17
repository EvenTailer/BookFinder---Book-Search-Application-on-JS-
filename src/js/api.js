import { renderBooks } from "./renderCards";
import { changeCurrentBook } from "./main";


// shows api on the main page, just as a test output, for visual filling
export async function getSomething() {

  try {
    const url = 'https://openlibrary.org/search.json?q=test&page=1&limit=40';

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`status: ${response.status}`)
    }
    const data = await response.json();
    return data.docs
  } catch (err) {
    console.error(err)
  }
}

// api for pulling up book covers
export function getPicture(value, size) {
  if (!value) return null;
  const url = `https://covers.openlibrary.org/b/id/${value}-${size}.jpg`;
  return url

}

// api for basic search by books, authors, or words
export async function searchBookAPI(name) {
  const url = `https://openlibrary.org/search.json?q=${name}&page=1&limit=40`
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err)
  }
}

// an api for retrieving genre data and writing it in the format we need
export async function getGenres(genre, container) {
  const url = `https://openlibrary.org/subjects/${genre}.json?limit=40`;
  if (!container) {
    console.error('getGenres: container is undefined');
    return;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }

    const data = await response.json();
    if (data.works && data.works.length) {

      const books = data.works.map(book => ({
        key: book.key,
        title: book.title,
        author_name: book.authors ? book.authors.map(a => a.name) : ['Unknown'],
        first_publish_year: book.first_publish_year,
        cover_i: book.cover_id
      }));
      changeCurrentBook(books)

      renderBooks(container, books)
    }

  } catch (err) {
    console.error(err);
  }
}