import Image from "./Image.tsx";

interface IProps {

}

const ProductCard = ({}: IProps) => {
    return (
        <div className="border rounded-md p-2 flex flex-col">
            <Image imageURL={"https://picsum.photos/300/300"} alt={"ProductName"}/>
            <h3>2022 BMW M4</h3>
            <p>$100,000</p>
            <div className="flex gap-2 my-2">
                <span className="w-5 h-5 bg-amber-700 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-blue-700 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-green-700 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer"/>
            </div>
            <div className="flex gap2 justify-between my-2 items-center font-bold">
                <span className="text-2xl text-indigo-600">$100,000</span>
                <Image imageURL={"https://picsum.photos/300/300"} alt={"ProductName"} className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <div className="flex gap-2 justify-between mt-2">
                <button className="bg-green-700 w-[50%] text-white rounded-md p-2">Edit</button>
                <button className="bg-red-700 w-[50%] text-white rounded-md p-2">Remove</button>
            </div>
        </div>
    )
}

export default ProductCard