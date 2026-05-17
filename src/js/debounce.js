import { searchBookAPI } from "./api";
import { renderBooks } from "./renderCards";
import { showLoader } from "./main";


// auto-search after 3 seconds as the user does not enter anything else
export function debounce(func,delay,){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(()=>func.apply(this,args),delay);
    }
}

export async function autoSearch(value,container){
    if(value === '')return;
    showLoader(container)
    const searchResponce = await searchBookAPI(encodeURIComponent(value));
    if(searchResponce && searchResponce.docs){
        container.innerHTML = '';
        renderBooks(container,searchResponce.docs);
        return searchResponce.docs;
    }else {
        container.innerHTML = '<p>No books found.</p>';
    }
}