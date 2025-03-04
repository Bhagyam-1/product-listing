import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails";
import CompareProducts from "../../pages/CompareProducts";
import Layout from "./Layout";

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