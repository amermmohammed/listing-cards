interface ICategories {
    name: string;
    imageURL: string;
}

export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: ICategories;
}

export interface IFormInput {
    id: string;
    name: string;
    label: string;
    type: string;
}