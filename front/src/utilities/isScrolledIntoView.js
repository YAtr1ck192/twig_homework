// запуск анимации при скролле
export default function isScrolledIntoView(container) {
    if (container) {
        const offset = window.innerWidth > 1024 ? 200 : 50;
        const elementPosition = {
                top: window.pageYOffset + container.getBoundingClientRect().top,
                bottom:
                    window.pageYOffset +
                    container.getBoundingClientRect().bottom,
            },
            windowPosition = {
                top: window.pageYOffset,
                bottom:
                    window.pageYOffset +
                    document.documentElement.clientHeight -
                    offset,
            };
        return (
            elementPosition.bottom > windowPosition.top &&
            elementPosition.top < windowPosition.bottom
        );
    }
    return false;
}
