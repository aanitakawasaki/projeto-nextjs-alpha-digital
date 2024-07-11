import styles from '../styles/select.module.css';

const Select = ({ options, selected, onChange }) => (
  <select className={styles.select} value={selected} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
