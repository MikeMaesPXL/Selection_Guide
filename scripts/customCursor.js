const storedCursorPosition = JSON.parse(localStorage.getItem('cursorPosition'));
let cursorX = storedCursorPosition ? storedCursorPosition.x : 0;
let cursorY = storedCursorPosition ? storedCursorPosition.y : 0;

const cursor = document.querySelector('.custom_cursor');
cursor.style.left = cursorX + 'px';
cursor.style.top = cursorY + 'px';

document.addEventListener('mousemove', (e) => {
    cursorX = e.pageX - (window.scrollX + 12);
    cursorY = e.pageY - (window.scrollY + 14); 

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    localStorage.setItem('cursorPosition', JSON.stringify({ x: cursorX, y: cursorY }));
});

