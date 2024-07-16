const Button = ({ children, disabled }) => (
  <button 
    className={`button ${disabled ? 'button-disabled' : ''}`} 
    disabled={disabled}
  >
    {children}
  </button>
);
//button é sempre aplicada, fornecendo os estilos básicos do botão. disabled ? 'button-disabled' : '': Aplica a classe button-disabled se disabled for true. Caso contrário, uma string vazia é aplicada.
//disabled={disabled}: Define o atributo disabled do elemento <button> com base na prop disabled (que está definida lá em index.js).
//{children}: Renderiza o conteúdo passado entre as tags de abertura e fechamento do componente Button.

export default Button;
