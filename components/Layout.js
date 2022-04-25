import Meta from './Meta'
import { useState } from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import { AppShell, ActionIcon, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import {Title} from '@mantine/core'
import Logo from './Logo'

const Layout = ({children}) => {
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);

  const handleClose = (e) => {
    if (e === false) {
      return
    }

    setOpened(false)
  }

  return (
    <>
      <Meta/>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        header={
          <Header p="md" style={{ border: 'none', background: 'none' }}>
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {theme.colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
}

export default Layout