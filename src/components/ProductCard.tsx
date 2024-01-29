import Image from "./Image.tsx";
import Button from "./ui/Button.tsx";
import {IProduct} from "../interfaces";
import {textSlicer} from "../utils/functions.ts";
import CircleColor from "./ui/CircleColor.tsx";

interface IProps {
    product: IProduct;
    setProductToEdit: (product: IProduct) => void;
    openEditModal: () => void;
    idx: number;
    setProductToEditIdx: (idx: number) => void;
}

const ProductCard = ({product, setProductToEdit, openEditModal, idx, setProductToEditIdx}: IProps) => {
    const {title, price, description, imageURL, colors, category} = product;

    /*render*/
    const renderProductColors = colors.map(color =>
        <CircleColor key={color} color={color}/>
    );

    /*Handler*/
    const onEdit = () => {
        setProductToEdit(product);
        openEditModal();
        setProductToEditIdx(idx);
    }
    return (
        <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0">
            <Image imageURL={imageURL} alt={title} className="h-full"/>
            <h3>{title}</h3>
            <p>{textSlicer(description)}</p>
            <div className="flex gap-2 my-2">
                {renderProductColors}
            </div>
            <div className="flex gap2 justify-between my-2 items-center font-bold">
                <span className="text-2xl text-indigo-600">
                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <div className="flex justify-center items-center gap-1"><span className="text-sm font-light">{category.name}</span><Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-cover"/></div>
            </div>
            <div className="flex gap-2 justify-between mt-2">
                <Button className="bg-indigo-700" onClick={onEdit}>Edit</Button>
                <Button className="bg-red-700">Remove</Button>
            </div>
        </div>
    )
}

export default ProductCard