import styles from '../styles/resultDisplay.module.css';

const ResultDisplay = ({ result }) => (
  result 
  ? <div className={styles.result}>Resultado: {result} BRL</div> 
  : null
);

export default ResultDisplay;
