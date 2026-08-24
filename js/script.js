const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    // Change the background color 
    document.body.style.backgroundColor = color.value;

    // Show the color code
    if (color.value === '#ffffff') {
        text.textContent = `Color Code: ${color.value} (White)`;
    } else if (color.value === '#000000'){
        text.textContent = `Color Code: ${color.value} (Black)`;
    } else {
        text.textContent = `Color Code: ${color.value}`;
    }
}

// Use colorBg when the color picker changes
color.addEventListener('input', colorBg);