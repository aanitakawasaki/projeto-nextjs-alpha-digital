import { useState } from 'react';
import Input from '../components/input';

const Home = () => {
  const [amount, setAmount] = useState('');

  return (
    <div>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  );
};

export default Home;
