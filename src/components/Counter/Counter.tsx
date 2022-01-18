import { useState, useEffect } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => { 
      setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return <main className="count">{count}</main>;
};

export default Counter;