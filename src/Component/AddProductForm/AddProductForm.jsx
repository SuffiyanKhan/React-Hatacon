import React, { memo, useState } from 'react'
import { useGlobalState } from '../../Context/Context'
import ImagesStore from '../../Services/imagesStore'
import { AddProduct } from '../../Services/addProduct'

function AddProductForm() {
    const { userId } = useGlobalState()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const getImages = async () => {
        setLoading(true);
        const getImage = await ImagesStore(image)
        setImageUrl(getImage)
        setLoading(false);
    }

    const show = async () => {
        if (productName || productDescription || productPrice || quantity || imageUrl) {
            const obj = {
                productName,
                productPrice,
                quantity,
                productDescription,
                imageUrl,
                userId
            }
            const addProducts = await AddProduct(obj)
        }
    }

    return (
        <>
            <div className="modal-body">
                <input type="text" className='form-control mt-3' placeholder='Product Name' onChange={(e) => { setProductName(e.target.value) }} />
                <input type="text" className='form-control mt-3' placeholder='Quantity' onChange={(e) => { setQuantity(e.target.value) }} />
                <input type="text" className='form-control mt-3' placeholder='Product Price' onChange={(e) => { setProductPrice(e.target.value) }} />
                <input type="text" className='form-control mt-3' placeholder='Product Description' onChange={(e) => { setProductDescription(e.target.value) }} />
                <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                    <input type="file" onChange={(e) => { setImage(e.target.files) }} />
                    <button className='btn btn-primary' disabled={loading} onClick={() => { getImages() }}>
                        {loading ? "Uploading..." : "Upload"}
                    </button>
                </div>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" disabled={!imageUrl} className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { show() }}>
                    Save changes
                </button>
            </div>
        </>
    )
}

export default memo(AddProductForm)
