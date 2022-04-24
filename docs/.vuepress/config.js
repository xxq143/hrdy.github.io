module.exports = {
    title: '个人笔记',
    description: '随便描述一下吧',
    themeConfig: {
        base:'/mynote/',
        logo: '/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Js', link: '/js/'},
            {text: 'Css', link: '/css/'},
        ],
        sidebar: [
            {
                title: 'home',
                path: '/'
            },{
                title: 'js-page',
                path: '/js/'
            }
        ],
        lastUpdated: 'Last Updated'
    }
}