import Cart from "../page/Cart/Cart";
import Homepage from "../page/Homepage/Homepage";
import Kind from "../page/Kind/Kind";
import My from "../page/My/My";
import Login from "../page/Login/Login.vue"
import Detail from "../page/Detail/detail.vue"
import Search from "../page/Search/Search.vue"
import Hot from "../page/Homepage/Hot/Hot.vue"


const createRouter = (Router) => {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/homepage',
                component: Homepage,
                //控制底部隐藏显示，不需要去掉即可
                meta: {
                    footshow: true
                },
                children: [{
                    path: "hot",
                    component: Hot
                }]
            },
            {
                path: '/search',
                component: Search
            },
            {
                path: '/cart',
                component: Cart,
                meta: {
                    footshow: true
                }
            },
            {
                path: '/kind',
                component: Kind,
                meta: {
                    footshow: true
                }
            },
            {
                path: '/my',
                component: My,
                meta: {
                    footshow: true
                }
            },
            {
                path: "/",
                redirect: '/homepage'
            },
            {
                path: "/login",
                component: Login,

            },
            {
                path: "/detail",
                component: Detail,

            }
        ]
    })
}

export default createRouter;