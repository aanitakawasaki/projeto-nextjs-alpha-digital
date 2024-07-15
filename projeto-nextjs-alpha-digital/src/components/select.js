const Select = ({ options, selected, onChange }) => (
  <select className="border border-blue-300 rounded px-4 py-2 text-lg font-inter focus:outline-none focus:ring-2 focus:ring-blue-500" value={selected} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
