document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.polaroid-gallery');
    const items = gallery.querySelectorAll('a');

    items.forEach((item, index) => {
        // Set the delay based on item position (0ms, 100ms, 200ms, etc.)
        const delay = index * 100;
        item.style.animationDelay = `${delay}ms`;
    });

    setTimeout(() => {
        gallery.classList.add('animate');
    }, 100);
});
