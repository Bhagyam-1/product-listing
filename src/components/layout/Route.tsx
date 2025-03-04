import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const ProductDetails = lazy(() => import("../../pages/ProductDetails"));
const CompareProducts = lazy(() => import("../../pages/CompareProducts"));

const wrapContentWithLayout = (content: React.ReactElement) => {
    return (
        <Layout>
            {content}
        </Layout>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: wrapContentWithLayout(<ProductDetails />)
    },
    {
        path: "/compare",
        element: wrapContentWithLayout(<CompareProducts />)
    }
])

const Routes = () => {
    return <RouterProvider router={router} />;
}

export default Routes;