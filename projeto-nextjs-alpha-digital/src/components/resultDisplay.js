const ResultDisplay = ({ result }) => (
  result 
  ? <div className="resultDisplay">
      Resultado: {result}
    </div> 
  : null
);
//Renderização Condicional: O componente verifica se result tem um valor. Se result tiver um valor (não for null, undefined, false, uma string vazia '', ou o número 0), a expressão retornará true. Se result for verdadeiro (ou seja, tem um valor válido), o componente renderiza o bloco de JSX da <div>. Caso contrário, o componente renderiza null, o que significa que nada será exibido na interface do usuário. Quando result tem um valor, o componente renderiza um elemento <div> com a classe CSS resultDisplay e exibe o texto "Resultado: " seguido do valor de result.

export default ResultDisplay;
