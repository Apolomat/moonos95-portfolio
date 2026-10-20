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
    app.addEventListener('dblclick', () => {
        apps.forEach((otherApp) => {
            otherApp.removeAttribute('data-selected');
        });

        app.setAttribute('data-selected', '');
    });
});