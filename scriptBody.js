const menuBtn = document.querySelector('#menuBtn');
const menuPopup = document.querySelector('#menuPopup');

menuBtn.addEventListener("click", () => {
    const isOpening = menuPopup.hidden;
    menuPopup.hidden = !isOpening;
    menuBtn.setAttribute('aria-expanded', String(isOpening));
});

document.querySelectorAll('.commonApp').forEach((app) => {
    app.addEventListener('dblclick', () => {
        // app.toggleAttribute('data-selected');
        app.setAttribute('data-selected');
    });
});

const apps = document.querySelectorAll('.commonApp');
const windows = document.getElementById('windows');

document.addEventListener('click', (event) => {
    const clickedApp = event.target instanceof Element
        ? event.target.closest('.commonApp')
        : null;

    apps.forEach((app) => {
        if (app !== clickedApp) {
            app.removeAttribute('data-selected');
        }
    });
});

apps.forEach((app) => {
    // para cada aplicativo, cria os event listeners
    app.addEventListener('click', () => {
        apps.forEach((otherApp) => {
            otherApp.removeAttribute('data-selected');
        });

        app.setAttribute('data-selected', '');
    });
    app.addEventListener('dblclick', () => {
        // creates the window for the app
            
        const window = document.createElement("div");
        window.classList.add("window");
        windows.appendChild(window);
        
        const windowHeader = document.createElement("div");
        windowHeader.classList.add("windowHeader");
        window.appendChild('windowHeader');

        windowsApps[app.id];
    });
});

const windowsApps = {
    "recycleBin": createRecycleWin(),
    "folder-Favorites": createFavoritesWin(),
    "aboutMe": createAboutWin()
}

function createRecycleWin() {
    window.alert("Function not created yet.");
}

function createFavoritesWin() {
    window.alert("Function not created yet.");
}

function createAboutWin() {
    window.alert("Function not created yet.");
}
