import ProductCard from "./components/ProductCard.tsx";
import {formInputsList, productList} from "./data";
import {useState} from "react";
import CustomModal from "./components/ui/Modal.tsx";
import Button from "./components/ui/Button.tsx";
import Input from "./components/ui/Input.tsx";

const App = () => {
    /*State*/
    let [isOpen, setIsOpen] = useState(false)

    /*Handler*/
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    /*Render*/
    const renderProductList = productList.map((product) =>
        <ProductCard key={product.id}
                     product={product}
        />);
    const renderFormInputList = formInputsList.map((input) =>
        <div key={input.name} className="flex flex-col gap-2">
            <label htmlFor={input.id} className="mb-[1px] text-sm font-medium text-gray-700">{input.label}</label>
            <Input type={input.type} name={input.name} id={input.name}/>
        </div>
    );
    return (
        <main className="container">
            <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add new Product</Button>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                gap-4 border-2 border-amber-950 m-5 p-2 rounded-md"
            >
                {renderProductList}
            </div>
            <CustomModal isOpen={isOpen} closeModal={closeModal} title="Add new Product">

                <form className="space-y-3">
                    {renderFormInputList}
                    <div className="flex items-center gap-2">
                        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={closeModal}>Submit</Button>
                        <Button className="bg-gray-400 hover:bg-gray-500" onClick={closeModal}>Cancel</Button>
                    </div>
                </form>

            </CustomModal>
        </main>
    );
}

export default App;