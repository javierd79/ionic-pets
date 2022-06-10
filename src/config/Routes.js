import Pets from "../components/Pets";
import Login from '../pages/login'
const routes = [
    {
        path:'/pets',
        component: Pets,
        isPrivate: true
    },
    {
        path:'/login',
        component: Login,
        isPrivate: true
    },
]

export default routes;