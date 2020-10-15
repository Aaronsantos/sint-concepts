import React from 'react';
import Menu from 'araceae-ui/build/Menu';
import { ThemeProvider } from 'araceae-ui';
import Pages from './pages';
// import { Container } from './styles';
const {
  REACT_APP_GRATITUDE_APP_NAME: gratitudeAppName,
  REACT_APP_GRATITUDE_URL: gratitudeUrl,
  REACT_APP_CONCEPTS_APP_NAME: conceptsAppName,
  REACT_APP_CONCEPTS_URL: conceptsUrl,
} = process.env;
const src: React.FC = () => {
  return (
    <ThemeProvider
      theme={{ colors: { white: '#C8D7D0', brand: '#079B8F' }, typography: {} }}
    >
      <Menu
        itens={[
          {
            name: gratitudeAppName!,
            href: gratitudeUrl!,
            selected: false,
          },
          {
            name: conceptsAppName!,
            href: conceptsUrl!,
            selected: true,
          },
        ]}
      />
      <Pages />
    </ThemeProvider>
  );
};

export default src;
