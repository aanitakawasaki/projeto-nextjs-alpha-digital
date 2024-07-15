const Button = ({ onClick, children }) => (
  <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400" onClick={onClick}>
    {children}
  </button>
);

export default Button;
