import React, { memo, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoryesData } from '../../Services/categoryesData'
import BackButton from '../BackButton/BackButton'
import { SaveLocalStorage } from '../../Services/saveLocalStorage'
import { useGlobalState } from '../../Context/Context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../Config/FirebaseConfig'

function Category() {
    const { category } = useParams()
    const { userId, setCountingProduct } = useGlobalState()
    const [categoryData, setCategoryData] = useState([])
    const [couunt, setCount] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryData = await CategoryesData(category)
                setCategoryData(categoryData.products)
            } catch (error) {

            }
        }
        fetchData()
    }, [category])

    const saveLocalStorage = (image, title, price, userId) => {
        SaveLocalStorage(image, title, price, userId)
        setCount(couunt + 1)
        setCountingProduct(couunt)
    }
    return (
        <div className='container'>
            <BackButton />
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
                                    <div className="flex-grow-1">
                                        <Link to={`/product/${data.id}`} className='text-dark text-decoration-none view-detail'  >
                                            View Detail <span><i class="fa-solid fa-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-3  d-flex justify-content-between">
                                    <button className='btn btn-primary w-50' >Buy </button>
                                    <button className='btn btn-primary w-50 ms-2 ' onClick={() => { saveLocalStorage(data.images[0], data.title, data.price, userId) }} >Add to cart </button>
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
