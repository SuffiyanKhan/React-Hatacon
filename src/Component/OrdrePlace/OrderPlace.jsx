import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import OrderTable from '../OrderTable/OrderTable'
import BackButton from '../BackButton/BackButton'

function OrderPlace() {
  const userId = useParams()
  const uid=userId.id
  return (
    <>
      <div className="container">
        <BackButton/>
      <h1 className='' >OrderPlace</h1>
        <div className="row mt-4">
          <div className="col-12">
           <OrderTable uid={uid} />
          </div>
        </div>
      </div>

    </>
  )
}

export default memo(OrderPlace)