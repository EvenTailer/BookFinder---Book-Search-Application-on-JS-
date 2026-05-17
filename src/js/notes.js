// data notes in localStorage
export function getFavorites(){
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// save new notes in localStorage
export function saveFavorites(favorites){
    localStorage.setItem('favorites',JSON.stringify(favorites));
}

// add to Notes 
export function addToFavorite(book){
    const favorites = getFavorites();
    const newFavorites = [...favorites,book];
    saveFavorites(newFavorites);
}

// delete from Notes 
export function delFavorite(bookKey){
    const favorites = getFavorites();
    const newFavorites =favorites.filter(book=>book.key !== bookKey);
    saveFavorites(newFavorites);
}


// checking if there are notes
export function isFavorite(key){
    const favorites = getFavorites();
    return favorites.some(book=> key === book.key);
}

// when you click the button, you can add and delete at the same time.
export function toggleFavorite(book,buttonElement){
    const favorites = getFavorites();
    const exist = favorites.some(fav=> fav.key === book.key);

    if(exist){
        delFavorite(book.key);
        buttonElement.textContent = '📌 Add in notes';
        buttonElement.classList.remove('remove');
    }else {
        addToFavorite(book);
        buttonElement.textContent = '🗑 Remove from notes';
        buttonElement.classList.add('remove');
    }
}

