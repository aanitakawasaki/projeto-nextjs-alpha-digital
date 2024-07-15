import { useState } from 'react';
import Input from '../src/components/input';
import Select from '../src/components/select';
import Button from '../src/components/button';
import ResultDisplay from '../src/components/resultDisplay';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const mockResult = `Resultado simulado para ${amount} ${currency}`;
    setResult(mockResult);
  };

  return (
    <div className="container">
      <title>Conversor de Moedas</title>
      <main className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8">Conversor de Moedas</h1>
        <div className="flex flex-col gap-4 mb-4">
          <Select options={[{ value: 'USD', label: 'Dólar Americano' }]} selected="USD" onChange={() => {}} />
          <Input value={100} onChange={() => {}} />
        </div>
        <Button onClick={() => {}}>Converter</Button>
        <ResultDisplay result={486.00} />
      </main>
    </div>
  );
};

export default Home;
