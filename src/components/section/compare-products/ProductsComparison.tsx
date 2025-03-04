import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ProductCompareI } from "../../../models/ProductDetails.model";
import ProductCards from "./ProductsCard";

const ProductsComparison = () => {
    const products: ProductCompareI[] = useSelector((store: RootState) => store.selectedProducts.selectedProducts);

    return (
        <>
            {
                !products.length ?
                    (
                        <p className="text-gray-500">No products selected for comparison.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((product: ProductCompareI) => (
                                <ProductCards product={product} key={product.id} />
                            ))}
                        </div>
                    )
            }
        </>
    )
}

export default ProductsComparison;