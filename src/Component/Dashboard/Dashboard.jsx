import React, { memo, useEffect, useState } from 'react';
import DashboardButton from '../DashboardButton/DashboardButton';
import { GetRealProducts } from '../../Services/getRealTimeData';
import { useGlobalState } from '../../Context/Context';

function Dashboard() {
  const { userId } = useGlobalState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProductsFromDatabase = await GetRealProducts(userId);
        if (getProductsFromDatabase) {
          setProducts(getProductsFromDatabase);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [userId]); 

  return (
    <div className="container mt-5">
      <div className="row border py-5 px-3">
        <div className="d-flex justify-content-between">
          <h3>Dashboard</h3>
          <div className="">
            <DashboardButton />
          </div>
        </div>
        <div className="col-12 mt-5" style={{overflowY:"auto",height:500 }}>
          <table className='table table-border'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.quantity}</td>
                  <td>{product.productPrice}</td>
                  <td><button className='btn btn-danger' >Delete </button></td> {/* Replace this with your action button */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
