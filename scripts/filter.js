(function () {
    const elem = document.querySelector('.shirts');
    const iso = new Isotope(elem, {
        itemSelector: '.shirts__item',
        filter: '.popular',
        masonry: {
            columnWidth: 300,
            gutter: 35
        }

    });

    const links = document.querySelectorAll('.nav__item');
    const activeClass = 'nav__item_active';

    links.forEach(function (link) {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            const filterName = link.getAttribute('data-filter');

            links.forEach(function (remove) {
                remove.classList.remove(activeClass);
            })

            link.classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        })
    })

})();