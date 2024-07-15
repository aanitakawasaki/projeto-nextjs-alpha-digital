const Input = ({ value, onChange }) => (
  <input
    type="number"
    className="border border-blue-300 rounded px-4 py-2 text-lg font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={value}
    onChange={onChange}
    placeholder="Digite o valor"
  />
);

export default Input;
