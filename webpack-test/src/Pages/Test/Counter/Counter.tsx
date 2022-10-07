import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';
import { RootState } from '../../../store/store';

const Counter = () => {
    // 通过useSelector直接拿到store中定义的value
    const { value } = useSelector((state: RootState) => state.counter)
    const [amount, setAmount] = useState(2);
    // 通过useDispatch 派发事件
    const dispatch = useDispatch()
    return (
        <div>
            <p>counter with redux toolkits</p>
            <p>{value}</p>
            <input value={amount} onChange={(e) => setAmount(+e.target.value)}/>
            <button onClick={()=>{dispatch(incrementByAmount(amount))}}>加{amount}</button>
            <button onClick={()=>{dispatch(increment())}}>加</button>
            <button onClick={()=>{dispatch(decrement())}}>减</button>
        </div>
    )
}

export default Counter;