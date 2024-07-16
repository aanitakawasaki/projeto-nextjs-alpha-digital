import { useState } from 'react';
import Input from '../src/components/input';
import Select from '../src/components/select';
import Button from '../src/components/button';
import ResultDisplay from '../src/components/resultDisplay';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD'); // Valor padrão
  const [result, setResult] = useState('');

  const handleConvert = () => {
    // Simulação da conversão
    const rate = 4.86; // Taxa fictícia
    const converted = amount * rate;
    setResult(`${converted.toFixed(2)} BRL`);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Converter</h1>
      <form className="space-y-4">
        <label className="label" htmlFor="amount">Valor</label>
        <Input id="amount" value={amount} onChange={e => setAmount(e.target.value)} />

        <label className="label" htmlFor="currency">Moeda</label>
        <Select id="currency"
          options={[{ value: 'USD', label: 'Dólar Americano' }]}
          selected={currency}
          onChange={e => setCurrency(e.target.value)}
        />

        <Button onClick={handleConvert}>Converter em reais</Button>
        {result && <div className="text-white mt-4 text-lg">Resultado: {result}</div>}
      </form>
    </div>
  );
};

export default Home;