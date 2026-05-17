export function aboutProject(){
    // Delete after modal if it was
    const existingModal = document.getElementById('aboutModal');
    if (existingModal) existingModal.remove();

    // create the container of modal this information about project for website, people can show how this project look and works. And what do I use
    const modal = document.createElement('div');
    modal.id = 'aboutModal';
    modal.className = 'modal-about';
    modal.innerHTML = `
        <div class="modal-about-content">
            <span class="close-about-modal">&times;</span>
            <h2> BookFinder – проект по поиску книг</h2>
            <p><strong>Краткое описание:</strong> Приложение для поиска книг с использованием открытого API Open Library. Позволяет искать по названию, автору, ключевым словам, а также просматривать подборки по жанрам (романтика, фэнтези, наука).</p>
            <h3> Возможности API Open Library, используемые в проекте:</h3>
            <ul>
                <li>Поиск книг по запросу (<code>/search.json</code>)</li>
                <li>Получение обложек книг по <code>cover_i</code> или <code>olid</code> (Covers API)</li>
                <li>Подборки по жанрам через Subjects API (<code>/subjects/{genre}.json</code>)</li>
            </ul>
            <h3> Реализованный функционал приложения:</h3>
            <ul>
                <li> Поиск книг с ручным вводом и кнопкой</li>
                <li> Debounced поиск "на лету" (задержка 3 секунды)</li>
                <li> Отображение карточек книг (обложка, название, автор(ы), год)</li>
                <li> Добавление/удаление книг в избранное (сохранение в localStorage)</li>
                <li> Отдельное боковое меню (бургер) для избранного</li>
                <li> Левое боковое меню с жанрами (романтика, фэнтези, научная фантастика)</li>
                <li> Переключение светлой/тёмной темы с сохранением выбора</li>
                <li> Заглушка для отсутствующих обложек</li>
                <li> Лоадер (спиннер) при загрузке данных</li>
                <li> Адаптивная вёрстка (мобильные устройства)</li>
            </ul>
            <h3> Как запустить проект локально</h3>
            <ol>
                <li>Склонировать репозиторий: <code>git clone https://github.com/EvenTailer/BookFinder---Book-Search-Application-on-JS-.git</code></li>
                <li>Перейти в папку проекта: <code>cd js-books-app</code></li>
                <li>Установить зависимости: <code>npm install</code></li>
                <li>Запустить режим разработки: <code>npm run dev</code></li>
                <li>Открыть браузер по адресу <code>http://localhost:5173</code></li>
                <li>Для сборки продакшн-версии: <code>npm run build</code> (файлы появятся в папке <code>dist</code>)</li>
            </ol>
            <h3> Стек технологий:</h3>
            <p>HTML5, CSS3 (CSS Grid, Flexbox, CSS Variables), JavaScript (ES6+), Vite, Fetch API, localStorage, Open Library API.</p>
            <h3> Ссылка на GitHub репозиторий:</h3>
            <p><a href="https://github.com/EvenTailer?tab=repositories" target="_blank">Репозиторий</a></p>
            <p><em>Проект выполнен в качестве учебного задания. Автор: Граматнев Илья <a href="https://github.com/EvenTailer">Профиль</a></em></p>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    //close modal    
    const closeBtn = modal.querySelector('.close-about-modal');
    closeBtn.addEventListener('click', () => modal.remove());

    // close for click on window
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}