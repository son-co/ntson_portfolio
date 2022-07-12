var load = document.querySelector('.preloader');
var page = document.querySelector('.page');

function loader() {
    setTimeout(() => {
        load.style.display = 'none';
        page.style.display = 'flex';

    }, 2000)
}

loader();