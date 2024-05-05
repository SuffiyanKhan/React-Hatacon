export const SearchBar = async (search) => {
    try {
        if(search){
            const searchProducts = await fetch(`https://dummyjson.com/products/search?q=${search}`);
            const response = await searchProducts.json();
            return response;
        }
    } catch (error) {
        console.error(error.message);
    }
};
