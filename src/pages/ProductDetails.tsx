import { Table, TablePaginationConfig } from "antd";
import { ProductDetailDataI } from "../models/ProductDetails.model";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchProductDetails } from "../service/ProductDetails.service";
import ProductDetailColumns from "../components/section/product-details/ProductDetailsColumns";
import { useDispatch, useSelector } from "react-redux";
import { addProductsInfo, resetProductsInfo } from "../redux/ProductSlice";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
    const [productDetails, setProductDetails] = useState<ProductDetailDataI[] | undefined>();
    const dispatch = useDispatch();

    const productInfoSelector = useSelector((state: RootState) => state.product.productsInfo);
    const selectedProducts = useSelector((state: RootState) => state.selectedProducts.selectedProducts);
    const highlightedIds = useMemo(() => selectedProducts.map((product) => product.id), [selectedProducts]);
    const columns = ProductDetailColumns(highlightedIds);

    const setProductDataUsingReducer = (page: number, pageSize: number, productDetails: ProductDetailDataI[], total: number) => {
        const productsInfo = { newProducts: productDetails, index: page - 1, total };

        if (productInfoSelector.pageSize !== pageSize)
            dispatch(resetProductsInfo({ ...productsInfo, pageSize: pageSize }));
        else
            dispatch(addProductsInfo(productsInfo));
    }

    const getProductDetails = useCallback(async (page: number, pageSize: number) => {
        try {
            setLoading(true);
            const [productDetails, total] = await fetchProductDetails(page - 1, pageSize);

            setPagination(pagination => ({ ...pagination, current: page, pageSize, total: total }));
            setProductDetails(productDetails);
            setProductDataUsingReducer(page, pageSize, productDetails, total);
        } catch (error) {
            toast.error((error as Error).message);
        } finally {
            setLoading(false);
        }
    }, [pagination, productInfoSelector]);

    const fetchAndSetProducts = useCallback((newPage: number | undefined, pageSize: number | undefined) => {
        newPage = newPage || 1;
        pageSize = pageSize || 10;

        if (pageSize !== productInfoSelector.pageSize || !productInfoSelector.products[newPage - 1]) {
            getProductDetails(newPage, pageSize);
        } else {
            setProductDetails(productInfoSelector.products[newPage - 1]);
            setPagination(pagination => ({ ...pagination, current: newPage, total: productInfoSelector.total }));
        }
    }, [productInfoSelector, getProductDetails]);


    useEffect(() => {
        fetchAndSetProducts(pagination.current, pagination.pageSize);
    }, []);

    const handlePageChange = useCallback((pagination: TablePaginationConfig) => {
        fetchAndSetProducts(pagination.current, pagination.pageSize);
    }, [fetchAndSetProducts]);

    return (
        <section aria-labelledby="productDetailHeading">
            <h1 className="sr-only" id="productDetailHeading">Product Details</h1>
            <Table <ProductDetailDataI>
                columns={columns}
                dataSource={productDetails}
                pagination={pagination}
                loading={loading}
                onChange={handlePageChange}
                rowClassName={(record) => highlightedIds.includes(record.key) ? "bg-yellow-200" : ""}
                scroll={{ x: 1000, y: 500 }}
            />
        </section>
    )
}

export default ProductDetails;