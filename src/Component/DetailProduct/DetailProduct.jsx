import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailPage } from '../../Services/detailPage';
import './DetailProduct.css'
import { Back } from '../../Services/BackBtn';
function DetailProduct() {
    const [productDetail, setProductDetail] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailPages = await DetailPage(id);
                setProductDetail(detailPages);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        fetchData();    
    }, [id]);

    if (!productDetail) {
        return <p>Loading ...</p>;
    }

    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="" >
                    <button className='DetailProduct' onClick={()=>{Back()}} ><i class="fa-solid fa-arrow-left"></i></button>
                    </div>
                    <h3 className="px-4">Detail Page</h3>
                    <div className="col-lg-5 col-md-6 col-12 ">
                        <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide mt-3"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner border" >
                                {productDetail.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img src={image} className="d-block w-100 main-carousel-image" alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 mt-3">
                        <h3>{productDetail.title}</h3>
                        <p className='fw-semibold ' >{productDetail.description}</p>
                        <p className='fw-semibold ' >Price: ${productDetail.price}</p>
                        <p className='fw-semibold ' >Stock: {productDetail.stock}</p>
                        <p className='fw-semibold ' >Category: {productDetail.category}</p>
                        <p className='fw-semibold ' >Brand: {productDetail.brand}</p>
                        <div className="col-12 mt-4 ">
                            <button className='btn btn-success w-100' >BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
