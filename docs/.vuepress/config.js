module.exports = {
    title: 'note',
    description: '随便描述一下吧',
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Js', link: '/js/' },
            { text: 'Css', link: '/css/' },
        ],
        sidebar: [{
            title: 'home',
            path: '/'
        }, {
            title: 'js-page',
            path: '/js/'
        }],
        lastUpdated: 'Last Updated'
    }
}