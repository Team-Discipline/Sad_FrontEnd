import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import GlobalStyle from '@/GlobalStyle';
import { Container, LogoTitle, NavBar, Main, Header, Footer } from './styles';

function AppLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const onChangeDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
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
        <Main>{children}</Main>
        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

export default AppLayout;
