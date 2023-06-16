import { ReactNode, lazy } from "react";
import { NonIndexRouteObject, Outlet } from "react-router-dom";
//父層 component 是 Outlet，才能使用 children
import SuspenseWrapper from "components/SuspenseWrapper";
//Page
const Home = lazy(() => import("pages/Home"));

const RouteConfig: RouteItem[] = [
    {
        path: "/",
        element: <SuspenseWrapper component={<Home/>}/>
    },{
        path: "/hello",
        element: <div>Hello</div>
    }
];

export default RouteConfig;

export interface RouteItem extends NonIndexRouteObject{
    name?: string;
    icon?: ReactNode;
    children?: RouteItem[];
}