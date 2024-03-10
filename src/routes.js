import {
    createBrowserRouter,
} from "react-router-dom";
import About from "./pages/about";
import Shef from "./pages/shef";
import Feature from "./components/Feature/Feature";
import Subacriptions from "./components/Subscription/Subacriptions";
import Menu from "./components/Menu/Menu";
import IndianFood from "./components/IndianMenu/Indian-Menu";
import BanglaFood from "./components/BanglaFood/BanglaFood";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login.jsx"
import Home from "./components/Home/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "shef",
        element: <Shef/>,
    },
    {
        path: "Feature",
        element: <Feature />,
    },
    {
        path: "Menu",
        element: <Menu />,
    },
    {
        path: "Subscription",
        element: <Subacriptions />,
    },
    {
        path: "indian-Menu",
        element: <IndianFood />,
    },
    {
        path: "BanglaFood",
        element: <BanglaFood />,
    },
    {
        path: "Cart",
        element: <Cart />
    },
    {
        path: "Login",
        element: <Login />
    }
]);

export default router;