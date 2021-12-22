class FicbookInator {
    constructor(fandoms, collections) {
        this.boxes = $('.categories-list.categories-block-box');
        this.setFandomList(fandoms);
        this.setCollectionList(collections);
    }

    setFandomList(fandoms) {
        const fandomBox = this.boxes.eq(2);
        const fandomList = fandomBox.find('.list-unstyled');

        fandomBox.find('.slide.js-slide-hidden').removeClass('js-slide-hidden').css({ display: 'block' });
        fandomBox.find('.opener').text('Мои фандомы');
        fandomList.empty();

        for (const fandom of fandoms) {
            fandomList.append(`<li><a href="${fandom.href}"><span>${fandom.title}</span></a></li>`);
        }

        return fandomBox.prependTo($('.categories-block'));
    }

    setCollectionList(collections) {
        const collectionBox = this.boxes.eq(0);
        const collectionList = collectionBox.find('.list-unstyled');

        collectionBox.find('.slide.js-slide-hidden').removeClass('js-slide-hidden').css({ display: 'block' });
        collectionBox.find('.opener').text('Мои сборники');
        collectionList.empty();

        for (const collection of collections) {
            collectionList.append(`<li><a href="${collection.href}"><span>${collection.title}</span></a></li>`);
        }
    }
}

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
const collections = [
    {
        title: 'Прочитано',
        href: '/collections/18669635'
    },
    {
        title: 'Читаю',
        href: '/collections/18669629'
    },
    {
        title: 'Посмотреть',
        href: '/collections/18669633'
    },
    {
        title: 'Посмотреть если оживет',
        href: '/collections/21198025'
    },
    {
        title: 'В надежде на продолжение',
        href: '/collections/18720385'
    },
    {
        title: 'Топ',
        href: '/collections/18669679'
    },
    {
        title: 'Офф',
        href: '/collections/18719996'
    },
]

new FicbookInator(fandoms, collections);
