import { ReactNode } from "react";

interface DimensionsI {
    width: number;
    height: number;
    depth: number;
}
  
interface MetaDataI {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
  
interface ReviewI {
    user: string;
    rating: number;
    comment: string;
}
  
interface ProductI {
    id: number;
    title: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    availabilityStatus: string;
    stock: number;
    minimumOrderQuantity: number;
    rating: number;
    returnPolicy: string;
    shippingInformation: string;
    warrantyInformation: string;
    sku: string;
    weight: number;
    dimensions: DimensionsI;
    tags: string[];
    thumbnail: string;
    images: string[];
    meta: MetaDataI;
    reviews: ReviewI[];
}

export interface ProductDetailDataI {
    key: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
    image: string;
    compare: ProductCompareI;
}

export interface ProductCompareI {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
}

export class ProductDetails {
    productDetails: ProductDetail[];
    
    constructor(productDetails: ProductI[]) {
        this.productDetails = productDetails.map((currProduct) => {
            return new ProductDetail(currProduct);
        })
    }
    
    toPlainObject(): ProductDetailDataI[] {
        return this.productDetails.map(product => product.toPlainObject());
    }
}

export class ProductDetail implements ProductDetailDataI{
    key: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
    image: string;
    compare: ProductCompareI;

    constructor(productDetail: ProductI) {
        this.key = productDetail.id;
        this.image = productDetail.thumbnail;
        this.title = productDetail.title;
        this.description = productDetail.description;
        this.price = productDetail.price;
        this.discountPercentage = productDetail.discountPercentage;
        this.brand = productDetail.brand;
        this.category = productDetail.category;
        this.compare = this.getCompareData(productDetail);
    }
    
    getCompareData(productDetail: ProductI): ProductCompareI {
        return {
            id: productDetail.id,
            title: productDetail.title,
            image: productDetail.thumbnail,
            description: productDetail.description,
            price: productDetail.price,
            discountPercentage: productDetail.discountPercentage,
            brand: productDetail.brand,
            category: productDetail.category
        }
    }

    toPlainObject(): ProductDetailDataI {
        return { ...this };
    }
}