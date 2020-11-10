import styled from "styled-components"
import { BREAKPOINT, COLOR } from "src/constants/styles"

export const Footer = styled.div`
  padding: 0 30px;
`

export const Menu = styled.ul`
  padding: 0;
  transition: 0.3s;
  li {
    font-size: 16px;
    > a {
      padding: 10px 30px;
      display: flex;
      align-items: center;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      text-decoration: none;
      img {
        width: 20px;
        height: auto;
        display: inline-block;
        margin-right: 10px;
      }
      &.active {
        background: ${COLOR.BLUE};
      }
    }
  }
`

export const Nav = styled.nav`
  min-width: 270px;
  max-width: 270px;
  background: #3e64ff;
  color: #fff;
  transition: all 0.3s;
  &.close {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    ${Menu} {
      li > a span {
        display: none;
      }
    }
    ${Footer} {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINT.MD - 1}px) {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    ${Menu} {
      li > a span {
        display: none;
      }
    }
    ${Footer} {
      display: none;
    }
    &.close {
      margin-left: -80px;
    }
  }
`

export const Logo = styled.a`
  display: block;
  color: #fff;
  font-weight: 900;
  padding: 10px 30px;
  transition: 0.3s;
`
