export const CategoryesData = async (category) => {
    try {
        const fetchData = await fetch(`https://dummyjson.com/products/category/${category}`)
        const responsive = fetchData.json()
        return responsive
    } catch (error) {

    }
}