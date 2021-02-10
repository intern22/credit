import Index from "../view/admin/dashboard/Index";
import Edit from "../view/admin/products/Edit";
import List from "../view/admin/products/List";
import Login from "../view/loginAndRegister/login"
import Register from "../view/loginAndRegister/register";
import PageNotFound from "../view/PageNotFound";
import board from '../view/admin/trademark/board'
import {AreaChartOutlined,ShopOutlined, TrademarkCircleFilled} from '@ant-design/icons'
export const mainRoutes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/404",
        component: PageNotFound
    }
];

export const adminRoutes = [
    {
        path: "/admin/dashboard",
        component: Index,
        isShow: true,
        title: "历史交易",
        icon: AreaChartOutlined
    },
    {
        path: "/admin/products",
        component: List,
        exact: true,
        isShow: true,
        title: "商品",
        icon: ShopOutlined
    },
    {
        path: "/admin/products/edit/:id?",
        component: Edit,
        isShow: false
    },
    {
        path: "/admin/trademark/board",
        component: board,
        isShow: true,
        title: "商标抵押",
        icon: TrademarkCircleFilled
    }
];