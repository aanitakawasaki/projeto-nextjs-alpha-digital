import { useState } from 'react';
import Input from '../components/input';
import Select from '../components/select';
import Button from '../components/button';
import ResultDisplay from '../components/resultDisplay';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const mockResult = `Resultado simulado para ${amount} ${currency}`;
    setResult(mockResult);
  };

  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Select
        options={[{ value: 'USD', label: 'Dólar Americano' }, { value: 'EUR', label: 'Euro' }]}
        selected={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <Button onClick={handleConvert}>Converter</Button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default Home;
