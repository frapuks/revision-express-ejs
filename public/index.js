console.log('Hello from space 🚀');

const app = {
    targetMainElement: document.querySelector('main'),
    targetBarreLevelElement: document.querySelector('.barre-level'),
    targetHeaderArticleElement: document.querySelectorAll('.article-header'),

    init: () => {
        app.setBackgroundColor(app.targetMainElement);
        app.setBackgroundColorAll(app.targetHeaderArticleElement);
        app.setWidth(app.targetBarreLevelElement);
    },
    setBackgroundColor: (element) => { 
        const color = element.dataset.color;
        element.style.backgroundColor = color;
    },
    setWidth: (element) => {
        if (element) {
            const level = element.dataset.level;
            const width = `${level *10}%`;
            element.style.width = width;
        }
    },
    setBackgroundColorAll: (elements) => {
        for (const element of elements) {
            app.setBackgroundColor(element);
        }
    }
}

app.init();