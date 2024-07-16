//index.js é a página principal da minha aplicação

import { useState } from 'react';
import Input from '../src/components/input';
import Select from '../src/components/select';
import Button from '../src/components/button';
import ResultDisplay from '../src/components/resultDisplay';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(''); 
  const [result, setResult] = useState('');
  //estados são definidos para armazenar a quantia em questão, a moeda selecionada para conversão e o resultado da conversão

  const handleConvert = async (e) => {
    e.preventDefault();
    //previne comportamento padrão de formulários

    try {
      const response = await fetch(`http://localhost:3000/api/cotacao/${currency}`);
      const data = await response.json();
      const rate = data[0]?.value;
      //com esse fetch obtemos a taxa de câmbio da moeda em questão

      if (!rate) {
        throw new Error('Cotação não encontrada');
      }

      const converted = amount * rate;
      //multiplicamos a quantia em questão pela taxa de câmbio em questão
      setResult(`${converted.toFixed(2)} BRL`);
      //guardamos o resultado da conversão em result
    } catch (err) {
      console.error(err);
      setResult('Erro ao buscar a cotação. Tente novamente mais tarde.');
    }
  };

  const currencyOptions = [
    { value: '', label: 'Selecione a moeda' },
    { value: 'USD', label: 'Dólar Americano' },
    { value: 'EUR', label: 'Euro' },
    { value: 'JPY', label: 'Iene Japonês' },
    { value: 'GBP', label: 'Libra Esterlina' },
    { value: 'AUD', label: 'Dólar Australiano' },
    { value: 'CAD', label: 'Dólar Canadense' },
    { value: 'CHF', label: 'Franco Suíço' }
  ];

  return (
    <>
      <div>
      <h1 className='title'>
        CONVERT
        </h1>
      </div>
        <div className="container">
          <form onSubmit={handleConvert}>
            {/*ao submeter o formulário, chamamos a função handleConvert */}
            <label htmlFor="amount" className="label">
              VALOR
            </label>
            <Input id="amount" value={amount} onChange={e => setAmount(e.target.value)} />
            {/*o valor inicial do input é '', afinal foi definido acima useState('') para o [amount, setAmount], quando ele for modificado(onChange), será o valor do input*/}

            <label htmlFor="currency" className="label">
              MOEDA
            </label>
            <Select id="currency"
              options={currencyOptions}
              selected={currency}
              onChange={e => setCurrency(e.target.value)}
            />
            {/*aqui ele coloca como opções as currencyOptions definidas acima. no selected ele pega o valor do useState de [currency, setCurrency] que tem como label a frase 'Selecione a moeda'. quando ele for modificado(onChange), currency será o valor do input*/}

            <Button type="submit" disabled={!currency}>
              Converter em reais
            </Button>
            {/*aqui o botão será desabilitado (disabled) se a variável currency for uma string vazia (''), ou seja, o botão ficará desabilitado até que o usuário selecione uma moeda. */}
          </form>
        </div>
        <ResultDisplay result={result} />
          {/*ResultDisplay recebe uma prop chamada result, que contém o valor resultante da conversão de moeda. quando o valor de result é atualizado, o componente ResultDisplay re-renderiza para mostrar o novo valor. */}
    </>
  );
};

export default Home;
