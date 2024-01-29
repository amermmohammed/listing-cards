import ProductCard from "./components/ProductCard.tsx";
import {categoriesList, colorsList, formInputsList, productList} from "./data";
import {useState, ChangeEvent, FormEvent} from "react";
import CustomModal from "./components/ui/Modal.tsx";
import Button from "./components/ui/Button.tsx";
import Input from "./components/ui/Input.tsx";
import { IProduct } from "./interfaces";
import {productValidation} from "./validation";
import ErrorMessage from "./components/ErrorMessage.tsx";
import CircleColor from "./components/ui/CircleColor.tsx"
import {v4 as uuid} from "uuid";
import Select from "./components/ui/Select.tsx";

const App = () => {
    const defaultProductObj = {
        title: "",
        description: "",
        price: "",
        imageURL: "",
        category: {
            name: "",
            imageURL: ""
        },
        colors: [],
    }
    /*State*/
    const [products, setProducts] = useState<IProduct[]>(productList);
    const [product, setProduct] = useState<IProduct>(
        defaultProductObj
    );
    const [isOpen, setIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] =
        useState({
            title: "",
            description: "",
            price: "",
            imageURL: "",
            colors: "",
    });
    const [tempColors, setTempColors] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
    /*Handler*/
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setProduct({
            ...product,
            [name]: value
        });
        setErrorMessage({
            ...errorMessage,
            [name]: ""
        });
    }

    const onCancel = () => {
        setProduct(defaultProductObj)
        closeModal()
    }
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {title, description, price, imageURL} = product;
        const errors = productValidation({
            title,
            description,
            price,
            imageURL,
            colors: [...tempColors],
        });

        const hasErrorMessage =
            Object.values(errors)
                .some(value => value === "")
            &&
            Object.values(errors)
                .every(value => value === "");

        if(!hasErrorMessage){
            setErrorMessage(errors);
            return;
        }

        setProducts((prev) => [{...product, id: uuid(), colors: tempColors, category: selectedCategory}, ...prev]);

        setProduct(defaultProductObj);
        setTempColors([]);
        closeModal();

    }
    /*Render*/
    const renderProductList = products.map((product) =>
        <ProductCard key={product.id}
                     product={product}
        />);

    const renderFormInputList = formInputsList.map((input) =>
        <div key={input.id} className="flex flex-col gap-2">
            <label htmlFor={input.id} className="mb-[1px] text-sm font-medium text-gray-700">{input.label}</label>
            <Input type={input.type} name={input.name} id={input.name} value={product[input.name]}
                   onChange={onChangeHandler}/>
            <ErrorMessage message={errorMessage[input.name]}/>
        </div>
    );

    const renderProductColors = colorsList.map(color =>
                <CircleColor key={color} color={color} onClick={() => {
                    if (tempColors.includes(color)) {
                        setTempColors((prev) => prev.filter(item=> item !== color))
                        return;
                    }
                    setTempColors((prev) => [...prev, color])
                    if (errorMessage.colors) {
                        setErrorMessage({
                            ...errorMessage,
                            colors: ""
                        })
                    }
                }}/>
    );

    return (
        <main className="container">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                gap-4 m-5 p-2 rounded-md"
            >
                <Button className="bg-indigo-700 hover:bg-indigo-800 mx-auto my-3 w-auto" onClick={openModal}>Add new Product</Button>
                {renderProductList}
            </div>
            <CustomModal isOpen={isOpen} closeModal={closeModal} title="Add new Product">

                <form className="space-y-3" onSubmit={submitHandler}>
                    {renderFormInputList}
                    <Select selected={selectedCategory} setSelected={setSelectedCategory} />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {renderProductColors}
                    </div>
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {tempColors.map((color) =>
                            (
                                <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                                      style={{backgroundColor: color}}>{color}</span>
                            ))}
                        <ErrorMessage message={errorMessage.colors}/>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
                        <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
                    </div>
                </form>

            </CustomModal>
        </main>
    );
}

export default App;