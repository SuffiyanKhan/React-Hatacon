import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../Services/allProducts';
import { Link } from 'react-router-dom';

function RenderAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await AllProducts();
                if (fetchedProducts) {
                    setProducts(fetchedProducts.products);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container-fluid mt-5 py-5">
            <div className="row ">
                {products.map((product, index) => (
                    <div className="col-lg-3 col-md-6 mb-3" key={index}>
                        <div className="card" style={{ width: '23rem', height: '100%' }}>
                            <img src={product.images[0]} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text ">Price : ${product.price}</p>
                                <p className="card-text flex-grow-1">{product.description}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RenderAllProducts;
