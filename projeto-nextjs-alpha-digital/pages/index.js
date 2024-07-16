import { useState } from 'react';
import Input from '../src/components/input';
import Select from '../src/components/select';
import Button from '../src/components/button';
import ResultDisplay from '../src/components/resultDisplay';
import axios from 'axios';  // Import Axios

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD'); // Valor padrão
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);  // Para lidar com erros

  const handleConvert = async (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário

    try {
      // Faça a requisição ao backend
      const response = await axios.get(`http://localhost:3000/api/cotacao/${currency}`);
      const rate = response.data[0]?.value; // Supondo que o valor da cotação esteja no primeiro item do array retornado

      if (!rate) {
        throw new Error('Cotação não encontrada');
      }

      // Calcula a conversão
      const converted = amount * rate;
      setResult(`${converted.toFixed(2)} BRL`);
      setError(null);  // Limpa qualquer erro anterior
    } catch (err) {
      console.error(err);
      setError('Erro ao buscar a cotação. Tente novamente mais tarde.');
      setResult('');  // Limpa o resultado anterior
    }
  };

  const currencyOptions = [
    { value: 'USD', label: 'Dólar Americano' },
    { value: 'EUR', label: 'Euro' },
    { value: 'JPY', label: 'Iene Japonês' },
    { value: 'GBP', label: 'Libra Esterlina' },
    { value: 'AUD', label: 'Dólar Australiano' },
    { value: 'CAD', label: 'Dólar Canadense' },
    { value: 'CHF', label: 'Franco Suíço' }
  ];

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Converter</h1>
      <form className="space-y-4" onSubmit={handleConvert}>
        <label className="label" htmlFor="amount">Valor</label>
        <Input id="amount" value={amount} onChange={e => setAmount(e.target.value)} />

        <label className="label" htmlFor="currency">Moeda</label>
        <Select id="currency"
          options={currencyOptions}
          selected={currency}
          onChange={e => setCurrency(e.target.value)}
        />

        <Button type="submit">Converter em reais</Button>
      </form>
      {error && <div className="text-red-500 mt-4 text-lg">Erro: {error}</div>}
      <ResultDisplay result={result} />
    </div>
  );
};

export default Home;
