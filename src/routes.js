export default[
    {
        path: '/',
        name: 'MainMenu',
        component: () => import("./components/mainMenu")
    },
    {
        path: '/gameMenu',
        name: 'GameMenu',
        component: () => import("./components/gameMenu")
    },
    {
        path: '/alphabet',
        name: 'Alphabet',
        component: () => import("./components/alphabet")
    },
    {
        path: '/collectCouple',
        name: 'CollectCouple',
        component: () => import("./components/collectCouple")
    },
    {
        path: '/wordConstructor',
        name: 'WordConstructor',
        component: () => import("./components/wordConstructor")
    },
    {
        path: '/colorChange',
        name: 'ColorChange',
        component: () => import("./components/colorChange")
    },
    {
        path: '/loopingAnimation',
        name: 'LoopingAnimation',
        component: () => import("./components/loopingAnimation")
    },
    {
        path: '/territory',
        name: 'Territory',
        component: () => import("./components/territory")
    }

];