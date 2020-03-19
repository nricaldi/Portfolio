import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.gradient};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: center; 
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  img {
    margin-top: -60px;
  }

  a {
    font-size: 1.25rem;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: light;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  @media (min-width: 1000px) {
    a {
      font-size: 1.75rem;
      // padding: 1.5rem;
    }

    img {
      margin-top: -120px;
      width: 300px;
    }
  }
`;
