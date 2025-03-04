import { createSlice } from "@reduxjs/toolkit";
import { ProductCompareI } from "../models/ProductDetails.model";


interface SelectedProductsState {
    selectedProducts: ProductCompareI[];
}

const initialState: SelectedProductsState = {
    selectedProducts: []
}

const selectedProductsSlice = createSlice({
    name: 'selectedProducts',
    initialState,
    reducers: {
        addSelectedProducts: (state, action) => {
            const newProduct = action.payload;
            state.selectedProducts.push(newProduct);
        },
        removeSelectedProducts: (state, action) => {
            const id = action.payload;
            state.selectedProducts = state.selectedProducts.filter(product => product.id !== id);
        }
    }
})

export const {addSelectedProducts, removeSelectedProducts} = selectedProductsSlice.actions;

export default selectedProductsSlice.reducer;