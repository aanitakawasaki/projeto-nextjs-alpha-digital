const ResultDisplay = ({ result }) => (
  result 
  ? <div 
      className="resultDisplay"
    >
      Resultado: {result} BRL
    </div> 
  : null
);

export default ResultDisplay;
