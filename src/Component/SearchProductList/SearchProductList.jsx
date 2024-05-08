import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context'
import { SaveLocalStorage } from '../../Services/saveLocalStorage'

function SearchProductList({ search }) {

    const [searchData, setSearchData] = useState([]);
    const { userId, setCountingProduct } = useGlobalState()
    const [couunt, setCount] = useState(0)
    useEffect(() => {
        setSearchData(search);
    }, [search]);
    const saveLocalStorage = (image, title, price, userId) => {
        SaveLocalStorage(image, title, price, userId)
        setCount(couunt + 1)
        setCountingProduct(couunt)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {searchData.length > 0 && (
                        <>
                            {searchData.map((product, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-2" >
                                    <div className="card" style={{ height: '100%' }} key={index}>
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
                                                <button className='btn btn-primary ' onclick={()=>{saveLocalStorage()}} >Add to cart </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchProductList;
