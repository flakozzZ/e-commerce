

export const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import("./home/index.vue"),

    },
    {
        path: '/category/:categoryId/product/:productId',
        name: "ProdcutDetails",
        component: () => import("./product/[id].vue")
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import("./favorites/index.vue")
    },
    {
        path: '/category/:categoryId',
        name: 'allProduct',
        component: () => import("./all-products/index.vue")
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import("./cart/index.vue")
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import("./checkout/index.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('./contact/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./about/index.vue')
    }
]