import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  height: 64px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px;
  border-bottom: var(--border);
  backdrop-filter: blur(5px);
`;

export const NavBar = styled.nav`
  display: flex;
  & > div {
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    width: 100%;
    gap: 24px;
  }

  & > div:last-child {
    gap: 12px;
  }
`;

export const LogoTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  & > img {
    height: 50px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border-bottom: var(--border);
`;
