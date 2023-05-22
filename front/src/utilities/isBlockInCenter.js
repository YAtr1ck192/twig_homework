// запуск анимации при скролле
export default function isBlockInCenter(container) {
    if (container) {
        const elementPosition = {
                top: window.pageYOffset + container.getBoundingClientRect().top,
                bottom:
                    window.pageYOffset +
                    container.getBoundingClientRect().bottom,
            },
            windowPosition = {
                top: window.pageYOffset,
                bottom:
                    window.pageYOffset + document.documentElement.clientHeight,
            };
        return (
            elementPosition.bottom < windowPosition.bottom &&
            elementPosition.top > windowPosition.top
        );
    }
    return false;
}
