const Input = ({ value, onChange }) => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    placeholder="Digite o valor"
    className="input"
  />
);
//O componente Input é definido em input.js e importado em index.js para ser usado lá. Quando usamos <Input /> em index.js, passamos algumas props: id, value e onChange. Em JSX, você pode passar valores para componentes personalizados da mesma forma que faz com elementos HTML, usando atributos. Lá em index.js, id, value e onChange são atributos passados para o componente Input. Aqui, no componente Input, essas props são recebidas como um objeto no parâmetro da função (value e onChange são desestruturados das props). Dentro do componente Input, essas props são usadas para definir as propriedades do elemento <input>, ou seja, com o que foi definido lá em index.js, Input será assim:
{/* 
<input
  type="number"
  value={amount}
  onChange={e => setAmount(e.target.value)}
  placeholder="Digite o valor"
  className="input"
/> 
*/}

export default Input;
