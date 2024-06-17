document.querySelectorAll('.test__item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});