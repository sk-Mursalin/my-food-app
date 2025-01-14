import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Body from "./src/component/Body";
import Contact from "./src/component/Contact";
import Cart from "./src/component/Cart";
import ResMenu from "./src/component/ResMenu";
import Error from "./src/component/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./src/utils/myStore";
import LoginPage from "./src/component/LoginPage";
import Sidebar from "./src/component/Sidebar";
import Header from "./src/component/Header";
const root = ReactDOM.createRoot(document.querySelector("#root"));


const AppLayout = () => {
    return (
        <Provider store={myStore}>
            <div>
               <Header/>
                <Outlet />
                <Sidebar/>
            </div>
        </Provider>

    )
}
const About = lazy(() => import("./src/component/About"))
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
       
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/res/:resId",
                element: <ResMenu />
            }
        ]
    },
])
root.render(<RouterProvider router={appRouter} />);
