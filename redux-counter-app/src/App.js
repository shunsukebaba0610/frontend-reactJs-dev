import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

function App() {
  //store.jsのcounterを取得
  const count = useSelector((state) => state.counter.value);
  //設置した変数の状態を見る
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(10);

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
      <button onClick={() => dispatch( increment() )}>＋</button>
      <button onClick={() => dispatch( decrement() )}>ー</button>
      <button onClick={() => dispatch( incrementByAmount(Number(incrementAmount)) )}>追加</button>
    </div>
  );
}

export default App;
