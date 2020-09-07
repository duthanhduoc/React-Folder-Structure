import React from 'react'
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps
} from 'react-router-dom'
import { connect } from 'react-redux'

interface ReduxProps {
  isAuthenticated: boolean
}
interface Props extends ReduxProps, RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

function AuthenticatedGuard(props: Props) {
  const { isAuthenticated, component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated && !localStorage.getItem('token')) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.app.isAuthenticated
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedGuard)
