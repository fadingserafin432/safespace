const form = document.getElementById('responseForm');
const responseList = document.getElementById('responseList');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !message) return;

    const div = document.createElement('div');
    div.innerHTML = `<strong>${name}</strong>: ${message}`;
    responseList.appendChild(div);

    form.reset();
});
