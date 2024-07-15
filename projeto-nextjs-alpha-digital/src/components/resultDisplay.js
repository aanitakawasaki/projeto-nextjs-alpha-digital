const ResultDisplay = ({ result }) => (
  result 
  ? <div className="text-blue-600 text-2xl font-bold mt-4">Resultado: {result} BRL</div> 
  : null
);

export default ResultDisplay;
