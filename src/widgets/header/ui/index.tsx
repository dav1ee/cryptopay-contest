'use client';

import { useContext } from 'react';

import { ThemeProviderContext } from '@/app/theme-provider';
import { Logo, Nav, RoundedButton } from '@/shared/ui';
import { HeaderLayout } from './layout';
import { ThemeToggler } from './theme-toggler';

export function Header() {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HeaderLayout>
      <Logo />
      <Nav />
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <ThemeToggler theme={theme} toggle={toggleTheme} />
        <RoundedButton label="Get started" variant="secondary" />
      </div>
    </HeaderLayout>
  );
}
