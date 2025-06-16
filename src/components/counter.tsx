 import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counterSlice";
import { useState } from "react";
import type { AppDispatch, RootState } from "../app/store"; 

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
