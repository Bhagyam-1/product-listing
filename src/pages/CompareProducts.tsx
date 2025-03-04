import { useSelector } from "react-redux";
import Button from "../components/common/Button";
import { RootState } from "../redux/store";
import ProductsComparison from "../components/section/compare-products/ProductsComparison";
import { ProductCompareI } from "../models/ProductDetails.model";
import Modals from "../components/common/Modals";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";

const CompareProducts = () => {
    const selectedProducts: ProductCompareI[] = useSelector((store: RootState) => store.selectedProducts.selectedProducts);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (selectedProducts.length === 4) {
            setIsModalOpen(false);
        }
    }, [selectedProducts.length]);

    return (
        <section className="text-center p-6 flex flex-col gap-16 items-center" aria-labelledby="compareProductsHeading">
            <h2 className="sr-only" id="compareProductsHeading">Compare Products</h2>
            <ProductsComparison />
            {selectedProducts.length < 4 && (
                isModalOpen ?
                    (<Modals onClose={closeModal}>
                        <ProductDetails />
                    </Modals>)
                    :
                    <Button name="+ Add More" buttonClick={openModal} classNames="w-sm mt-8 px-4 py-2" />
            )}
        </section>
    );
};

export default CompareProducts;
