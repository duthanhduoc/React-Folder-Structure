import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "src/pages/Login/Login"
import { PATH } from "src/constants/paths"

export default function LoginRoutes() {
  return (
    <Switch>
      <Route path={PATH.LOGIN} component={Login} />
    </Switch>
  )
}
