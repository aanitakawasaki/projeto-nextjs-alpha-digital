//_app.js é o componente de nivel superior (é comum em todas as páginas)

import '../src/styles/globals.css';
//é no _app.js que é importado o CSS global​

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
//A função MyApp no arquivo _app.js é um componente especial no Next.js que permite controlar a inicialização de todas as páginas em sua aplicação. Ela é usada para inicializar páginas e pode ser utilizada para injetar propriedades adicionais, lidar com a lógica de layout global, e manter o estado através de navegações de página.
//Component: Este é um componente React que representa a página ativa. Quando você navega entre páginas em um aplicativo Next.js, o Component mudará para representar a nova página renderizada.
//pageProps: Este objeto contém as propriedades que a página pode precisar. Essas propriedades podem ser fornecidas inicialmente pelo servidor ou por meio de funções do Next.js como getStaticProps ou getServerSideProps, que são executadas antes de renderizar uma página.
//<Component {...pageProps} />: Aqui, o componente da página é renderizado com todas as suas propriedades espalhadas. Isso significa que todas as pageProps serão passadas como props para o componente da página, permitindo que esses dados sejam acessíveis dentro do componente da página.

export default MyApp;
