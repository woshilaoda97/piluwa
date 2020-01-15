import Cart from "../page/Cart/Cart";
import Homepage from "../page/Homepage/Homepage";
import Kind from "../page/Kind/Kind";
import My from "../page/My/My";

const createRouter = ( Router )=> {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/homepage',
                component: Homepage,
            },
            {
                path: '/cart',
                component: Cart,
            },
            {
                path: '/kind',
                component: Kind,
            },
            {
                path: '/my',
                component: My,
            },
            {
                path: "/",
                redirect: '/homepage'
            }
        ]
    })
}

export default createRouter;