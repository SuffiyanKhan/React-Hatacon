export const AllProducts =async () => {
    try {
        const fetchProducts = await fetch("https://dummyjson.com/products");
        const res = fetchProducts.json();
        return res
    } catch (error) {
        console.error(error)
    }
}