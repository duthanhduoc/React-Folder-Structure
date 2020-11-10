import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { logout, toggleSideNav } from "src/App/App.actions"
import { useHistory } from "react-router-dom"
import { LogoutIcon } from "./Header.styles"
import { PATH } from "src/constants/paths"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout,
  toggleSideNav
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const Header = (props: Props) => {
  const { logout, toggleSideNav } = props
  const history = useHistory()
  const handleLogout = () => {
    logout()
    history.push(PATH.LOGIN)
  }
  useEffect(() => {}, [history])

  return (
    <header className="d-flex bg-light justify-content-between p-3 shadow-sm">
      <button className="btn btn-primary" onClick={toggleSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -53 384 384"
          width="20"
        >
          <g>
            <path
              d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
            <path
              d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
            <path
              d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
          </g>
        </svg>
      </button>
      <LogoutIcon onClick={handleLogout} className="btn btn-outline-secondary">
        Logout
      </LogoutIcon>
    </header>
  )
}

export default connector(Header)
