// import Cart from "../page/Cart/Cart";
// import Homepage from "../page/Homepage/Homepage";
// import My from "../page/My/My";
// import Login from "../page/Login/Login.vue"
import Kind from "../page/Kind/Kind";
import Detail from "../page/Detail/detail.vue"
import Search from "../page/Search/Search.vue"
import Hot from "../page/Homepage/Hot/Hot.vue"
import Register from "../page/Login/Register.vue"
//路由懒加载
const Cart = () => import(/* webpackChunkName: "group-foo" */ "../page/Cart/Cart")
const Homepage = () => import(/* webpackChunkName: "group-foo" */ "../page/Homepage/Homepage")
const My = () => import(/* webpackChunkName: "group-foo" */ "../page/My/My")
const Login = () => import(/* webpackChunkName: "group-foo" */ "../page/Login/Login.vue")

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
                path:"/register",
                component: Register,
            },
            {
                path: "/detail/:id",
                component: Detail,

            }
        ]
    })
}

export default createRouter;