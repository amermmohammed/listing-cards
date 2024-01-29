import ProductCard from "./components/ProductCard.tsx";
import { categoriesList, colorsList, formInputsList, productList } from "./data";
import { useState, ChangeEvent, FormEvent } from "react";
import CustomModal from "./components/ui/Modal.tsx";
import Button from "./components/ui/Button.tsx";
import Input from "./components/ui/Input.tsx";
import { IProduct} from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage.tsx";
import CircleColor from "./components/ui/CircleColor.tsx"
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select.tsx";
import { ProductNameTypes } from "./types";
import toast, { Toaster } from "react-hot-toast";

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
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
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
    const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
    const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

    /*Handler*/
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    const closeEditModal = () => {
        setIsOpenEditModal(false)
    }

    const openEditModal = () => {
        setIsOpenEditModal(true)
    }
    const closeConfirmModal = () => {
        setIsOpenConfirmModal(false)
    }

    const openConfirmModal = () => {
        setIsOpenConfirmModal(true)
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
    const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setProductToEdit({
            ...productToEdit,
            [name]: value
        });
        setErrorMessage({
            ...errorMessage,
            [name]: ""
        });
    }

    const onCancel = () => {
        setProduct(defaultProductObj)
        closeEditModal();
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

        if (!hasErrorMessage) {
            setErrorMessage(errors);
            return;
        }

        setProducts((prev) => [{...product, id: uuid(), colors: tempColors, category: selectedCategory}, ...prev]);

        setProduct(defaultProductObj);
        setTempColors([]);
        closeModal();
        toast.success("Product added successfully");
    }
    const submitEditHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {title, description, price, imageURL} = productToEdit;
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

        if (!hasErrorMessage) {
            setErrorMessage(errors);
            return;
        }

        const updatedProducts = [...products];
        updatedProducts[productToEditIdx] = {
            ...productToEdit,
            colors: tempColors.concat(productToEdit.colors),
        }
        setProducts(updatedProducts);

        setProductToEdit(defaultProductObj);
        setTempColors([]);
        closeEditModal();
        toast.success("Product edited successfully");
    }

    const removeProductHandler = () => {
        const updatedProducts = products.filter(product => product.id !== productToEdit.id);
        setProducts(updatedProducts);
        closeConfirmModal();
        toast.success("Product deleted successfully");
    }
    /*Render*/
    const renderProductList = products.map((product, idx) =>
        <ProductCard key={product.id}
                     product={product}
                     setProductToEdit={setProductToEdit}
                     openEditModal={openEditModal}
                     idx={idx}
                     setProductToEditIdx={setProductToEditIdx}
                    openConfirmModal={openConfirmModal}
        />
    );

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
            if (tempColors.includes(color) || productToEdit.colors.includes(color)) {
                setTempColors((prev) => prev.filter(item => item !== color));
                setProductToEdit({
                    ...productToEdit,
                    colors: productToEdit.colors.filter(item => item !== color)
                })
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

    const renderProductEditWithErrorMsg = (id: string, label: string, name: ProductNameTypes) => {
        return (
            <div className="flex flex-col gap-2">
                <label htmlFor={id}
                       className="mb-[1px] text-sm font-medium text-gray-700">{label}</label>
                <Input type={"text"} name={name} id={id} value={productToEdit[name]}
                       onChange={onChangeEditHandler}/>
                <ErrorMessage message={errorMessage[name]}/>
            </div>
        );
    }
    return (
        <main className="container">
            <div className="flex justify-center">
                <Button className="bg-indigo-700 hover:bg-indigo-800 my-3 mx-auto" width="w-fit" onClick={openModal}>
                    Add new Product
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5 p-2 rounded-md">
                {renderProductList}
            </div>
            {/*Add new Product Modal*/}
            <CustomModal isOpen={isOpen} closeModal={closeModal} title="Add new Product">
                <form className="space-y-3" onSubmit={submitHandler}>
                    {renderFormInputList}
                    <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
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

            <CustomModal isOpen={isOpenEditModal} closeModal={closeEditModal} title={`Edit ${productToEdit.title}`}>
                <form className="space-y-3" onSubmit={submitEditHandler}>
                    {renderProductEditWithErrorMsg('title', 'Product Title', 'title')}
                    {renderProductEditWithErrorMsg('description', 'Product Description', 'description')}
                    {renderProductEditWithErrorMsg('imageURL', 'Product Image URL', 'imageURL')}
                    {renderProductEditWithErrorMsg('price', 'Product price', 'price')}
                    <Select selected={productToEdit.category}
                            setSelected={value => setProductToEdit({...productToEdit, category: value})}
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {renderProductColors}
                    </div>
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {tempColors.concat(productToEdit.colors).map((color) =>
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

            <CustomModal isOpen={isOpenConfirmModal}
                         closeModal={closeConfirmModal}
                         title="Are you sure you want to delete this Product?"
                         description="This action cannot be undone. This will permanently delete this Product.">
                <div className="flex items-center space-x-3">
                    <Button className="bg-red-400 hover:bg-red-600" onClick={removeProductHandler}>Yes, Delete Product</Button>
                    <Button className="bg-gray-500 hover:bg-gray-600 text-white" onClick={closeConfirmModal}>
                        Cancel
                    </Button>
                </div>
            </CustomModal>
        <Toaster />
        </main>
    );
}

export default App;