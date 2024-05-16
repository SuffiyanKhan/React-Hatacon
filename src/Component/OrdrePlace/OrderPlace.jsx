import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import OrderTable from '../OrderTable/OrderTable'
import BackButton from '../BackButton/BackButton'
import { useGlobalState } from '../../Context/Context'

function OrderPlace() {
  const { totallPrice } = useGlobalState()
  const userId = useParams()
  const uid = userId.id
  return (
    <>
      <div className="container">
        <BackButton />
        <div className="d-flex justify-content-between align-items-center">
          <h1 className='' >OrderPlace</h1>
          <p>Total Price: ${totallPrice}</p>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <OrderTable uid={uid} />
          </div>
          <div className="d-flex justify-content-end">
            <button className='btn btn-success'>Buy</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default memo(OrderPlace)