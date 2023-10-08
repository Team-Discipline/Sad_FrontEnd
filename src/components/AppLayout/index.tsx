import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import GlobalStyle from '@/GlobalStyle';
import { brightTheme, darkTheme } from './theme';
import { Container, LogoTitle, NavBar, Header } from './styles';

function AppLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const onChangeDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : brightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <NavBar>
            <div>
              <Link to='/'>
                <LogoTitle>
                  <img src='/logo.svg' alt='' />
                  <div>제목</div>
                </LogoTitle>
              </Link>
              <Link to='/'>링크</Link>
              <Link to='/'>링크</Link>
              <Link to='/'>링크</Link>
            </div>
            <div>
              <button onClick={onChangeDarkMode}>테마변경</button>
              <button>로그인</button>
            </div>
          </NavBar>
        </Header>
        <main>
          <div>{children}</div>
        </main>
        <footer>Footer</footer>
      </Container>
    </ThemeProvider>
  );
}

export default AppLayout;
