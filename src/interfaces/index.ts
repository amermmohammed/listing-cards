import { ProductNameTypes } from "../types";

interface ICategories {
    name: string;
    imageURL: string;
}

export interface IProduct {
    id?: string;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: ICategories;
}

export interface IFormInput {
    id: string;
    name: ProductNameTypes;
    label: string;
    type: string;
}

export interface ICategory {
    id: string;
    name: string;
    imageURL: string;
}