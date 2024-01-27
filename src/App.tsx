import ProductCard from "./components/ProductCard.tsx";
import {productList} from "./data";
import CustomDialog from "./components/ui/Modal.tsx";
import {useState} from "react";
import CustomModal from "./components/ui/Modal.tsx";
import Button from "./components/ui/Button.tsx";

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
                <div className="flex items-center gap-2">
                    <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={closeModal}>Submit</Button>
                    <Button className="bg-gray-300 hover:bg-gray-400" onClick={closeModal}>Cancel</Button>
                </div>
            </CustomModal>
        </main>
    );
}

export default App;