import styles from '../styles/input.module.css';

const Input = ({ value, onChange }) => (
  <input
    type="number"
    className={styles.input}
    value={value}
    onChange={onChange}
    placeholder="Digite o valor"
  />
);

export default Input;
