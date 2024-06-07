document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const contentDiv = document.querySelector('body');
    const paragraphs = contentDiv.getElementsByTagName('p');

    // Clear previous highlights
    for (let p of paragraphs) {
        p.innerHTML = p.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    }

    // Highlight search term
    for (let p of paragraphs) {
        if (p.textContent.toLowerCase().includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            p.innerHTML = p.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    }
});
