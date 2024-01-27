import Image from "./Image.tsx";
import Button from "./ui/Button.tsx";
import {IProduct} from "../interfaces";
import {textSlicer} from "../utils/functions.ts";

interface IProps {
    product: IProduct;
}

const ProductCard = ({product}: IProps) => {
    const {title, price, description, imageURL, category} = product;
    return (
        <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0">
            <Image imageURL={imageURL} alt={title}/>
            <h3>{title}</h3>
            <p>{textSlicer(description)}</p>
            <div className="flex gap-2 my-2">
                {
                    product.colors.map((color) =>
                    <div key={color} className="w-5 h-5 rounded-full bg-red-500"></div>
                    )
                }
            </div>
            <div className="flex gap2 justify-between my-2 items-center font-bold">
                <span className="text-2xl text-indigo-600">{price}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <div className="flex gap-2 justify-between mt-2">
                <Button className="bg-indigo-700">Edit</Button>
                <Button className="bg-red-700">Remove</Button>
            </div>
        </div>
    )
}

export default ProductCard