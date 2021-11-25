var btn = document.createElement('button');
btn.id = 'btn';
btn.innerHTML = '0';

document.body.appendChild(btn);

btn.addEventListener('click', function () {
    const current = parseInt(btn.innerHTML);
    btn.innerHTML = current + 1;
});
