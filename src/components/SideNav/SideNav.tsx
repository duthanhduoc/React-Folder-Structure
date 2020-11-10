import React from "react"
import { NavLink } from "react-router-dom"
import { Footer, Logo, Menu, Nav } from "./SideNav.styles"
import { PATH } from "src/constants/paths"
import home from "src/assets/images/home.svg"
import list from "src/assets/images/list.svg"
import { connect, ConnectedProps } from "react-redux"

const mapStateToProps = state => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

function SideNav(props: Props) {
  const { closeSideNav } = props
  return (
    <Nav className={closeSideNav ? "close" : ""}>
      <h1>
        <Logo
          href="https://xdevclass.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          X
        </Logo>
      </h1>
      <Menu className="list-unstyled mb-5">
        <li>
          <NavLink exact to={PATH.HOME}>
            <img src={home} alt="" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.PRODUCT}>
            <img src={list} alt="" />
            <span>Product</span>
          </NavLink>
        </li>
      </Menu>
      <Footer>
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | This
          template is made with by
          <a
            href="https://xdevclass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white"
          >
            XdevClass
          </a>
        </p>
      </Footer>
    </Nav>
  )
}

export default connector(SideNav)
