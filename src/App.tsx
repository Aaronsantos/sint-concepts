import React from 'react';
import Menu from 'araceae-ui/build/Menu';
import { ThemeProvider } from 'araceae-ui';
import Pages from './pages';
// import { Container } from './styles';

const src: React.FC = () => {
  return (
  <ThemeProvider theme={{ colors: { white: '#C8D7D0', brand: '#079B8F'}, typography: {} }}>
    <Menu itens={[{ name: 'Gratidão', href: 'https://priceless-turing-b02a53.netlify.app', selected: false}, { name: 'Conceitos', href: '/', selected: true}]} />
    <Pages />
  </ThemeProvider>
  );
}

export default src;
