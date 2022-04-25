import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  })

  const toggleColorScheme = () => {
    setColorScheme((colorScheme) => (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Meta/>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: 'yellow'
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}