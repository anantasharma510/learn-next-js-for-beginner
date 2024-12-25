import Product from "./product";  // Import the Product component

async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

export default async function Page() {
    const products = await productList();

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                        {/* Pass price as a prop to Product component */}
                        <Product price={product.price} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
