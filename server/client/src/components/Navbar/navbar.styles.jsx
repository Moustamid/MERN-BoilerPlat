import styled from 'styled-components';
//-Layouts :
import FullWidthSection from '../../Layout/FullWidthSection';
import Row from '../../Layout/Row';
// import Button from '../Button';

export const Nav = styled(FullWidthSection)`
  position: fixed;
  height: 65px;
  width: 100vw;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.black};
  transition: all 0.8s ease;
`;

export const Container = styled(Row)`
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoBox = styled.div``;

export const Logo = styled.img`
  height: 11rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.down.md} {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;
export const NavItem = styled.li`
  margin-left: 1.2rem;
`;

export const Ancker = styled.a`
  font-family: ${({ theme }) => theme.typography.Poppins};
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 2.6rem;
  color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.primary
      : ({ theme }) => theme.colors.white};

  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const PopupButton = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.9rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.5rem;
  letter-spacing: 1.2px;
  transition: all 0.2s;
  position: relative;

  background: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.secondary
      : 'rgba(255, 255, 255, 0.08)'};

  a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.typography.Poppins};
    color: ${({ active }) =>
      active
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.white};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ active }) =>
      active
        ? ({ theme }) => theme.colors.secondary
        : 'rgba(255, 255, 255, 0.08)'};
    border-radius: 2rem;
    transition: all 0.4s;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.yellow};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover:before {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;