// const storedCursorPosition = JSON.parse(localStorage.getItem('cursorPosition'));
// let cursorX = storedCursorPosition ? storedCursorPosition.x : 0;
// let cursorY = storedCursorPosition ? storedCursorPosition.y : 0;

// const cursor = document.querySelector('.custom_cursor');
// cursor.style.left = cursorX + 'px';
// cursor.style.top = cursorY + 'px';

// document.addEventListener('mousemove', (e) => {
//     cursorX = e.pageX - (window.scrollX + 12);
//     cursorY = e.pageY - (window.scrollY + 14); 

//     cursor.style.left = cursorX + 'px';
//     cursor.style.top = cursorY + 'px';

//     localStorage.setItem('cursorPosition', JSON.stringify({ x: cursorX, y: cursorY }));
// });


document.addEventListener('DOMContentLoaded', () => {
    const storedCursorPosition = JSON.parse(localStorage.getItem('cursorPosition'));
    let cursorX = storedCursorPosition ? storedCursorPosition.x : 0;
    let cursorY = storedCursorPosition ? storedCursorPosition.y : 0;

    const cursor = document.querySelector('.custom_cursor');
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    let timer; // Initialize the timer variable

    // Function to update cursor position
    const updateCursorPosition = (e) => {
        cursorX = e.pageX - (window.scrollX + 12);
        cursorY = e.pageY - (window.scrollY + 14); 

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        localStorage.setItem('cursorPosition', JSON.stringify({ x: cursorX, y: cursorY }));

        // Reset the timer whenever the cursor moves
        clearTimeout(timer);
        cursor.classList.remove('pulse'); // Remove pulse class when cursor moves
        timer = setTimeout(() => {
            // Add pulse class after 3 seconds of inactivity
            cursor.classList.add('pulse');
        }, 3000);
    };

    // Event listener for mousemove
    document.addEventListener('mousemove', updateCursorPosition);

    // Initial setup for cursor color change after 3 seconds of inactivity
    timer = setTimeout(() => {
        cursor.classList.add('pulse');
    }, 3000);
});
