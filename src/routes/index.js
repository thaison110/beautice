import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/service",
        component: Service,
    },
    {
        path: "/gallery",
        component: Gallery,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/contact",
        component: Contact,
    },
];
const priveRoutes = [];
export { publicRoutes, priveRoutes };
