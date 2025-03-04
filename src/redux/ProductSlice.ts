import { createSlice } from "@reduxjs/toolkit"
import { ProductDetailDataI } from "../models/ProductDetails.model";

interface ProductsInfoI {
    products: { [key: number]: ProductDetailDataI[] },
    pageSize: number;
    total: number;
}

interface ProductState {
    productsInfo: ProductsInfoI;
}

const initialState: ProductState = {
    productsInfo: { products: [], pageSize: 10, total: 0}
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductsInfo: (state, action) => {
            const { newProducts, index, total } = action.payload;
            state.productsInfo.products[index] = newProducts;
            state.productsInfo.total = total;
        },
        resetProductsInfo: (state, action) => {
            const {newProducts, index, pageSize, total} = action.payload;
            state.productsInfo.pageSize = pageSize;
            state.productsInfo.products = {[index]: newProducts};
            state.productsInfo.total = total;
        }
    }
});


export const { addProductsInfo, resetProductsInfo } = productSlice.actions;
export default productSlice.reducer;