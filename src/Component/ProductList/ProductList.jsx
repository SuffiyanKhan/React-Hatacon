import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'
import { SaveLocalStorage } from '../../Services/saveLocalStorage'
import { useGlobalState } from '../../Context/Context'

function ProductList(products) {
    const { userId, setCountingProduct } = useGlobalState()
    const [couunt, setCount] = useState(0)

    if (!products) {
        return <p>data not found</p>
    }
    const saveLocalStorage = (image, title, price, userId) => {
        SaveLocalStorage(image, title, price, userId)
        setCount(couunt + 1)
        setCountingProduct(couunt)
    }
    return (
        <>
            <div className="container mt-2 ">
                <div className="row ">
                    {products.product.map((product, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-2" key={index}>
                            <div className="card" style={{ height: '100%' }}>
                                <img src={product.images[0]} className="card-img-top" alt={product.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text ">Price : ${product.price}</p>
                                    <p className="card-text ">{product.description}</p>
                                    <div className="flex-grow-1">
                                        <Link to={`/product/${product.id}`} className='text-dark text-decoration-none view-detail'  >
                                            View Detail <span><i class="fa-solid fa-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                    <div className="mt-3  d-flex justify-content-between">
                                        <button className='btn btn-primary w-50' >Buy </button>
                                        <button className='btn btn-primary w-50 ms-2 ' onClick={() => { saveLocalStorage(product.images[0], product.title, product.price, userId) }} >Add to cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList