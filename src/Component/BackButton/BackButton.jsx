import React from 'react'

function BackButton() {
const backBtn=()=>{
    window.history.back()
}
  return (
    <div>
        <div className="mt-5 py-4">
            <button className='btn btn-light' onClick={backBtn}><i class="fa-solid fa-arrow-left"></i></button>
        </div>
    </div>
  )
}

export default BackButton