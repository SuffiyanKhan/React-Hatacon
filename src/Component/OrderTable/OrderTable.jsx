import React, { useEffect, useState } from 'react';
import { GetOrderProducts } from '../../Services/getOrderProducts';
import Counter from '../Counter/Counter';
import { DeleteOrderProducts } from '../../Services/deleteOrderProduct';
import DataNotFound from '../DataNotFound/DataNotFound';
import Loader from '../Loader/Loader';
import { useGlobalState } from '../../Context/Context';

function OrderTable(id) {
    const { increment,setTotalPrice } = useGlobalState()
    const [orderProducts, setOrderProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderProductsData = await GetOrderProducts(id.uid);
                setOrderProducts(orderProductsData);
                // console.log(orderProductsData)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (productId, orderId) => {
        try {
            await DeleteOrderProducts(productId, orderId);
            const updatedOrderProductsData = await GetOrderProducts(id.uid);
            setOrderProducts(updatedOrderProductsData);
        } catch (error) {
            console.error('Error deleting order product:', error);
            setError(error);
        }
    };
    const totalPrice = () => {
        let total = 0
        orderProducts.map((data) => {
            total += data.data.price
        })
        setTotalPrice(total)
        // console.log(increment)
    }
    totalPrice()
    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {orderProducts.length === 0 ? (
                <DataNotFound />
            ) : (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="col-2">Serial No.</th>
                            <th className="col-2">Image</th>
                            <th className="col-4">Title</th>
                            <th className="col-2">Price</th>
                            {/* <th className="col-2">Quantity</th> */}
                            <th className="col-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderProducts.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={data.data.image} className="img-fluid" style={{ width: "40px", objectFit: 'cover' }} alt="" />
                                </td>
                                <td>{data.data.name}</td>
                                <td>{data.data.price}</td>
                                {/* <td><Counter /></td> */}
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(data.id, id.uid)}>Delete item</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default OrderTable;
