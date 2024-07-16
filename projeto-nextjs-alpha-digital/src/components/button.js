const Button = ({ onClick, children, disabled }) => (
  <button 
    onClick={onClick}
    className={`button ${disabled ? 'button-disabled' : ''}`} 
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
