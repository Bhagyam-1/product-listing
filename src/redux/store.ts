import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import selectedProductReducer from "./SelectedProductsSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        selectedProducts: selectedProductReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;