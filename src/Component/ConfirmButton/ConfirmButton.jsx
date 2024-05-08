import React from 'react'
import { useGlobalState } from '../../Context/Context'
import { Link } from 'react-router-dom'

function ConfirmButton() {
  const { userId } = useGlobalState()
  
  return (
    <div className='w-100 mt-2' >
      <Link className='btn btn-success w-100' to={`/orderplace/${userId}`} >order place</Link>
    </div>
  )
}

export default ConfirmButton