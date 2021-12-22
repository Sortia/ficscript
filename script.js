$('.home-block, .header-b, .discount-sticky').hide();
$('.add-nav.pull-left.hidden-xs.top-nav a').hide();

// Главная страница
if (location.href === 'https://ficbook.net/') {
    function displayMyFandomList() {
        const fandoms = [
            {
                title: 'Гарри Поттер',
                href: '/fanfiction/books/harri_potter/popular'
            },
            {
                title: 'Ведьмак',
                href: '/fanfiction/games/vedmak/popular'
            },
            {
                title: 'Marvel Comics',
                href: '/fanfiction/comics/marvel_comics/popular'
            },
            {
                title: 'Warcraft',
                href: '/fanfiction/games/world_of_warcraft/popular'
            },
            {
                title: 'Игра престолов',
                href: '/fanfiction/books/pesnj_ljda_i_plameni__dzh__martina/popular'
            },
            {
                title: 'Аватар: Легенда об Аанге',
                href: '/fanfiction/cartoons/avatar__the_last_airbender/popular'
            },
            {
                title: 'Звездные войны',
                href: '/fanfiction/movies_and_tv_series/zvezdnie_vojni/popular'
            },
            {
                title: 'Червь',
                href: '/fanfiction/books/makkrej_dzhon___chervj/popular'
            },
        ];

        const boxes = $('.categories-list.categories-block-box');
        const fandomBox = boxes.eq(2);
        const list = fandomBox.find('.list-unstyled');

        fandomBox.find('.slide.js-slide-hidden').removeClass('js-slide-hidden').css({ display: 'block' });

        fandomBox.find('.opener').text('Мои фандомы');

        list.empty();
        for (const fandom of fandoms) {
            list.append(`<li><a href="${fandom.href}"><span>${fandom.title}</span></a></li>`);
        }

        fandomBox.prependTo($('.categories-block'));
    };

    function stylePage() {
        $('.main-holder').hide();
        $('.categories-block').css({
            'margin-bottom': 20
        })
    };

    stylePage();
    displayMyFandomList();
}
