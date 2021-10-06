import "./CounterBlock.css";
import "../../index.css";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
          <div className="counter">
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
          </div>
        </div>
      )
    }

    export default Counter;