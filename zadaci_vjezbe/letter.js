document.getElementById('countBtn').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) count++;
    }
    document.getElementById('counter').textContent = count;
});
