export const DetailPage = async (id) => {
    try {
        const fetchDetail = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await fetchDetail.json()
        return response
        // console.log(id)
    } catch (error) {
        console.error(error)
    }
}