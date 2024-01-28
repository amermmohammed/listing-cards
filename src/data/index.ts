import { v4 as uuid } from "uuid";
import {IFormInput, IProduct} from '../interfaces';

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: 'Coca Cola',
        price: "2.99",
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://images-cdn.ubuy.co.in/657163c18cc26b20246d8164-coca-cola-classic-coke-soft-drink.jpg',
        colors: ['#f5da42',
'#f54242',
'#42f554',
'#4286f5'],
        category: {
            name: 'Drinks',
            imageURL: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2018/03/29/soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands/7819019-1-eng-GB/Soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands.jpg'
        },
    },
    {
        id: uuid(),
        title: 'Fanta',
        price: "2.99",
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://www.bigbasket.com/media/uploads/p/xxl/251019_8-fanta-soft-drink-orange-flavoured.jpg',
        colors: ['#f5da42',
'#f54242',
'#42f554',
'#4286f5'],
        category: {
            name: 'Drinks',
            imageURL: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2018/03/29/soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands/7819019-1-eng-GB/Soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands.jpg'
        },
    },
    {
        id: uuid(),
        title: 'Sprite',
        price: "2.99",
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPruvGMHNss1rRHx0OgTH98k831eTdKN3nAA&usqp=CAU',
        colors: ['#f5da42',
'#f54242',
'#42f554',
'#4286f5'],
        category: {
            name: 'Drinks',
            imageURL: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2018/03/29/soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands/7819019-1-eng-GB/Soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands.jpg'
        },
    },
    {
        id: uuid(),
        title: 'Pepsi',
        price: "2.99",
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://www.pepsico.com/images/default-source/products-brands/pepsi_12oz.png?sfvrsn=46c9ae09_3',
        colors: ['#f5da42',
'#f54242',
'#42f554',
'#4286f5'],
        category: {
            name: 'Drinks',
            imageURL: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2018/03/29/soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands/7819019-1-eng-GB/Soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands.jpg'
        },
    },
    {
        id: uuid(),
        title: 'Coca Cola Zero',
        price: "2.99",
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3bOwpSDyjlFPBvUElQYB0t1C7rGfNOPL_A&usqp=CAU',
        colors: ['#f5da42',
'#f54242',
'#42f554',
'#4286f5'],
        category: {
            name: 'Drinks',
            imageURL: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2018/03/29/soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands/7819019-1-eng-GB/Soft-drink-health-concerns-not-yet-trickled-down-into-social-media-users-mentions-of-brands.jpg'
        },
    },
];

export const formInputsList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        type: "text",
        label: "Product Title",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text",
    },
    {
        id: "imageURL",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
    }
];

/*Add 20 color combination */
export const colorsList: string[] = [
    '#f5da42', // Yellow
    '#3498db', // Blue
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#9b59b6', // Purple
    '#1abc9c', // Turquoise
    '#e67e22', // Orange
    '#95a5a6', // Gray
    '#d35400', // Brown
    '#27ae60', // Emerald
    '#f39c12', // Orange
    '#c0392b', // Dark Red
    '#2980b9', // Royal Blue
];
