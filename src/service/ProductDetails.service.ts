import axios from "axios";
import { ProductDetails } from "../models/ProductDetails.model";

export const fetchProductDetails = async(skip: number, limit: number) => {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    try {
        const res = await axios.get(url);
        const data = new ProductDetails(res.data.products);
        return [data.toPlainObject(), res.data.total];
    } catch(error) {
        throw new Error("Failed to fetch product details. Please try again.");
    }
}