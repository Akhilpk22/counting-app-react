import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decerement, incerement, reset,incermentByAmount } from './redux/counterSlice'

function Counter() {
  const [amount,setamount] = useState("")

    const dispatch = useDispatch()
  const count = useSelector((state)=>state.Counter.count)
  
  const handleincerment=()=>{
    if(amount===""){
      alert("please enter your amount ")
    }else{
        dispatch(incermentByAmount(Number(amount)))
    }
  }

  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className=' d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column'>
            <h1 style={{fontSize:'100px'}}>{count}</h1>
              {/* in need to action  */}
            <div className='d-flex justify-content-between w-100 mt-5'>
                <button onClick={()=>dispatch(decerement())}  className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())}  className='btn btn-danger'>Reset</button>
                <button onClick={()=>dispatch(incerement())} className='btn btn-success'>incerement</button>
                
            </div>
            <div className='d-flex mt-5'>
              
            <input onChange={e=>setamount(e.target.value)}  className='form-control p-3' type="text" placeholder='enter your nubmer to be increment' />
            <button onClick={handleincerment } className='btn btn-primary ms-3'>incerementAmount</button>
            </div>
        </div>
        
    </div>
  )
}

export default Counter