import ProductCard from "./components/ProductCard.tsx";
import {productList} from "./data";

const App = () => {
    const renderProductList = productList.map((product) =>
         <ProductCard key={product.id}
          product={product}
        />);

    return (
        <main className="container">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                gap-4 border-2 border-amber-950 m-5 p-2 rounded-md"
            >
                {renderProductList}
            </div>
        </main>
    );
}

export default App;