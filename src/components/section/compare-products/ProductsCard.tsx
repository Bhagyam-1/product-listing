import { useDispatch } from "react-redux";
import { ProductCompareI } from "../../../models/ProductDetails.model";
import Button from "../../common/Button";
import { removeSelectedProducts } from "../../../redux/SelectedProductsSlice";

interface ProductCardI {
    product: ProductCompareI;
}

const ProductCards = ({ product }: ProductCardI) => {
    const dispatch = useDispatch();

    const onProductRemove = () => {
        dispatch(removeSelectedProducts(product.id));
    }

    return (
        <article aria-labelledby="product-title" key={product.id} className="border rounded-lg p-4 bg-white shadow-md relative text-tertiary-background">
            <Button name="Remove" buttonClick={onProductRemove} classNames="bg-primary-red px-4 py-2" />

            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
            <h3 id="product-title" className="text-md font-semibold">{product.title}</h3>
            <p className="text-sm"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-sm"><strong>Category:</strong> {product.category}</p>
            <p className="text-sm"><strong>Price:</strong> ${product.price}</p>
            <p className="text-sm"><strong>Discount%:</strong> ${product.discountPercentage}</p>
        </article>
    )
}

export default ProductCards;