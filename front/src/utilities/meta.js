export const meta = (store) => {
    const { head } = document;
    const items = store.getters['meta/items'];

    Object.keys(items).forEach((item) => {
        if (item === 'title') document.title = items.title;

        if (item === 'keywords') {
            let keywords = head.querySelector('meta[name="keywords"]');
            if (!keywords) {
                keywords = document.createElement('meta');
                keywords.setAttribute('name', 'Keywords');
                head.appendChild(keywords);
            }
            keywords.setAttribute('content', items.keywords);
        }
        if (item === 'description') {
            let description = head.querySelector('meta[name="description"]');
            if (!description) {
                description = document.createElement('meta');
                description.setAttribute('name', 'description');
                head.appendChild(description);
            }
            description.setAttribute('content', items.description);
        }
    });
};
