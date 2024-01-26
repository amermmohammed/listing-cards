import ProductCard from "./components/ProductCard.tsx";

const App = () => {
    return (
        <div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                gap-4 border-2 border-amber-950 m-5 p-2 rounded-md"
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default App;