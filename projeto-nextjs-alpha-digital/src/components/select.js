const Select = ({ options, selected, onChange }) => (
  <select
    value={selected} 
    onChange={onChange}
    className="select" 
  >
    {options.map(option => (
      <option 
        key={option.value} 
        value={option.value}
      >
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
