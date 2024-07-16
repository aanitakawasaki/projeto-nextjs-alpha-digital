const Input = ({ value, onChange }) => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    placeholder="Digite o valor"
    className="input"
  />
);

export default Input;
