document.addEventListener('DOMContentLoaded', () => {
    const storedCursorPosition = JSON.parse(localStorage.getItem('cursorPosition'));
    let cursorX = storedCursorPosition ? storedCursorPosition.x : 0;
    let cursorY = storedCursorPosition ? storedCursorPosition.y : 0;

    const cursor = document.querySelector('.custom_cursor');
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    let timer; 

    const updateCursorPosition = (e) => {
        cursorX = e.pageX - (window.scrollX + 12);
        cursorY = e.pageY - (window.scrollY + 14); 

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        cursor.style.transform = 'scale(1.25)';

        localStorage.setItem('cursorPosition', JSON.stringify({ x: cursorX, y: cursorY }));

        clearTimeout(timer);
        cursor.classList.remove('pulse');
        timer = setTimeout(() => {
            cursor.classList.add('pulse');
        }, 3000);
    };

    document.addEventListener('mousemove', updateCursorPosition);

    timer = setTimeout(() => {
        cursor.classList.add('pulse');
    }, 3000);
});
