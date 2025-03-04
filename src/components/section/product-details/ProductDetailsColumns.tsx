

import { useNavigate } from "react-router-dom";
import { ProductCompareI, ProductDetailDataI } from "../../../models/ProductDetails.model";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { addSelectedProducts } from "../../../redux/SelectedProductsSlice";
import { toast } from "react-toastify";

const ProductDetailColumns = (highlightedDetails: number[]) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCompare = (productInfo: ProductCompareI) => {
        if (highlightedDetails.includes(productInfo.id)) {
            return;
        }

        if (highlightedDetails.length === 4) {
            toast.error("You can compare up to 4 products. Please remove one to add a new product.");
            return;
        }

        dispatch(addSelectedProducts(productInfo));
        navigate('/compare')
    }

    return [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.title.localeCompare(b.title)
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            ellipsis: true,
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.description.localeCompare(b.description)
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price: string) => `$${price}`,
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.price - b.price
        },
        {
            title: "Discount %",
            dataIndex: "discountPercentage",
            key: "discountPercentage",
            render: (discount: string) => `${discount}%`,
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.discountPercentage - b.discountPercentage
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.brand.localeCompare(b.brand)
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            sorter: (a: ProductDetailDataI, b: ProductDetailDataI) => a.category.localeCompare(b.category)
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (src: string) => <img width={50} src={src} alt="Product" loading="lazy" />
        },
        {
            title: "Compare",
            dataIndex: "compare",
            key: "compare",
            render: (record: any) => (
                <Button
                    name="Compare"
                    classNames="px-2 py-1"
                    buttonClick={() => handleCompare(record)}
                    disabled={highlightedDetails.includes(record.id)}
                />
            )
        }
    ]
}

export default ProductDetailColumns;