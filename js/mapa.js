function hideAllInfo() {
    document.querySelectorAll('.infoEllipse').forEach(function(info) {
        info.style.display = 'none';
    });
}

document.getElementById('ellipseTermas').addEventListener('click', function () {
    const info = document.getElementById('infoEllipseTermas');
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        hideAllInfo();
        info.style.display = 'block';
    }
});

document.getElementById('ellipsePonte').addEventListener('click', function () {
    const info = document.getElementById('infoEllipsePonte');
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        hideAllInfo();
        info.style.display = 'block';
    }
});
