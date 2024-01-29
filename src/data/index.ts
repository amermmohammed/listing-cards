import {v4 as uuid} from "uuid";
import {ICategory, IFormInput, IProduct} from '../interfaces';

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
export const categoriesList: ICategory[] = [
    {
        id: uuid(),
        name: "Drinks",
        imageURL: "https://i.redd.it/yyr6vtruhzbb1.jpg"
    },
    {
        id: uuid(),
        name: "Food",
        imageURL: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
    },
    {
        id: uuid(),
        name: "Electronics",
        imageURL: "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
    },
    {
        id: uuid(),
        name: "Clothing",
        imageURL: "https://blog.garmentprinting.com.au/wp-content/uploads/2021/03/clothing-line.jpg",
    },
    {
        id: uuid(),
        name: "Books",
        imageURL: "https://media.npr.org/assets/img/2015/12/04/best-books-2015-8c5b457cbb33d68c25a146f0ab55fc654bb40264-s1100-c50.jpg",
    },
    {
        id: uuid(),
        name: "Home Decor",
        imageURL: "https://m.media-amazon.com/images/I/81aMwe7G72L._AC_SL1500_.jpg",
    },
    {
        id: uuid(),
        name: "Sports",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/1200px-Sport_balls.svg.png",
    },
    {
        id: uuid(),
        name: "Beauty",
        imageURL: "https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min.jpeg",
    },
    {
        id: uuid(),
        name: "Toys",
        imageURL: "https://planetgames.eu/wp-content/uploads/2018/04/blog-toys1.png",
    },
    {
        id: uuid(),
        name: "Music",
        imageURL: "https://media.wired.com/photos/5926df59f3e2356fd800ab80/master/w_2560%2Cc_limit/GettyImages-543338600-S2.jpg",
    },
];

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: 'Coca Cola',
        price: '2.99',
        description: 'Refreshing drink for the summer days and nights 🌞🌚',
        imageURL: 'https://images-cdn.ubuy.co.in/657163c18cc26b20246d8164-coca-cola-classic-coke-soft-drink.jpg',
        colors: [colorsList[5], colorsList[0], colorsList[2]],
        category: categoriesList[0],
    },
    {
        id: uuid(),
        title: 'Blueberry Muffins',
        price: '4.50',
        description: 'Delicious muffins bursting with blueberries. Perfect for breakfast!',
        imageURL: 'https://sugarspunrun.com/wp-content/uploads/2021/05/Best-Blueberry-Muffins-Recipe-1-of-1.jpg',
        colors: [colorsList[1], colorsList[9], colorsList[3]],
        category: categoriesList[1],
    },
    {
        id: uuid(),
        title: 'Smartphone X',
        price: '699.99',
        description: 'Cutting-edge smartphone with advanced features and sleek design.',
        imageURL: 'https://media.ldlc.com/r1600/ld/products/00/04/65/15/LD0004651580_2.jpg',
        colors: [colorsList[2], colorsList[6], colorsList[11]],
        category: categoriesList[2],
    },
    {
        id: uuid(),
        title: 'Red T-Shirt',
        price: '49.99',
        description: 'Red T-Shirt for casual wear.',
        imageURL: 'https://m.media-amazon.com/images/I/41Hc6qpz74L._AC_UY1100_.jpg',
        colors: [colorsList[2], colorsList[8], colorsList[4]],
        category: categoriesList[3],
    },
    {
        id: uuid(),
        title: 'Fantasy Book Collection',
        price: '29.99',
        description: 'Immerse yourself in a world of fantasy with this book collection.',
        imageURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-08/20/11/campaign_images/webdr08/fantasy-forever-2-21703-1440085091-6_dblbig.jpg',
        colors: [colorsList[10], colorsList[5], colorsList[1]],
        category: categoriesList[4],
    },
    {
        id: uuid(),
        title: 'Modern Table Lamp',
        price: '79.99',
        description: 'Illuminate your space with this stylish modern table lamp.',
        imageURL: 'https://m.media-amazon.com/images/I/81RljuOxakL.jpg',
        colors: [colorsList[7], colorsList[2], colorsList[0]],
        category: categoriesList[5],
    },
    {
        id: uuid(),
        title: 'Soccer Ball',
        price: '19.99',
        description: 'High-quality soccer ball for your sports activities.',
        imageURL: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/48a07106-0db9-440c-94b6-0b10ea1e78ef/premier-league-academy-soccer-ball-NJR7L1.png',
        colors: [colorsList[3], colorsList[9], colorsList[11]],
        category: categoriesList[6],
    },
    {
        id: uuid(),
        title: 'Makeup Palette',
        price: '39.99',
        description: 'Create stunning looks with this versatile makeup palette.',
        imageURL: 'https://www.instyle.com/thmb/hVld6zxAVfQZpkACavt_extHfMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INS_PatMcGrathLabs_MothershipIXHuetopianDreamEyeshadowPalette_tstaples_154-3-1-1929e6ddaf5b48a2a556b4c060df3ea2.jpeg',
        colors: [colorsList[4], colorsList[8], colorsList[1]],
        category: categoriesList[7],
    },
    {
        id: uuid(),
        title: 'Wooden Toy Set',
        price: '24.99',
        description: 'Safe and fun wooden toy set for kids.',
        imageURL: 'https://www.melissaanddoug.com/cdn/shop/products/Stack-Sort-Pound-_2L_-093685-1-Detail-Photo.jpg?v=1664908900&width=750',
        colors: [colorsList[9], colorsList[5], colorsList[0]],
        category: categoriesList[8],
    },
    {
        id: uuid(),
        title: 'Bluetooth Headphones',
        price: '59.99',
        description: 'Enjoy high-quality sound with these stylish Bluetooth headphones.',
        imageURL: 'https://store.techgigz.com/cdn/shop/products/BTWIZYTWSK-01-MAIN-1200x1200_1024x1024.jpg?v=1690731100',
        colors: [colorsList[1], colorsList[6], colorsList[10]],
        category: categoriesList[9],
    },
];
