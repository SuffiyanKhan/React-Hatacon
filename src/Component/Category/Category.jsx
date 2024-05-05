import React, { memo, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoryesData } from '../../Services/categoryesData'
import BackButton from '../BackButton/BackButton'

function Category() {
    const { category } = useParams()
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const categoryData = await CategoryesData(category)
            setCategoryData(categoryData.products)
        }
        fetchData()
    }, [category])

    return (
        <div className='container'>
            <BackButton/>
            <div className="row">
                {
                    categoryData.map((data) => (
                        <div className="col-md-4 mb-3" key={data.id}>
                            <div className="card h-100">
                                <img src={data.images[0]} className="card-img-top" alt={data.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">Price: ${data.price}</p>
                                    <p className="card-text flex-grow-1">{data.description}</p>
                                    <Link to={`/product/${data.id}`} className="btn btn-primary mt-auto">
                                        View Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Category)
