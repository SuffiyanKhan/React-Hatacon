import React from 'react'
import { Link } from 'react-router-dom'

function ProductList(products) {
    if (!products) {
        return <p>data not found</p>
    }
    const saveLocalStorage = (image,title,price) => {
        console.log(image,title,price)
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
                                        <Link to={`/product/${product.id}`} className=' border text-dark text-decoration-none'  >
                                            View Detail <i class="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <div className="mt-3  d-flex justify-content-between">
                                        <button className='btn btn-primary' >Buy </button>
                                        <button className='btn btn-primary ' onClick={() => { saveLocalStorage(product.images[0], product.title, product.price) }} >Add to cart </button>
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